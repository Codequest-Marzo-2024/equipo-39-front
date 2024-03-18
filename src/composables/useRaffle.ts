import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';
import Swal from 'sweetalert2';

import {
  createRaffle,
  getRaffleById,
  getRaffleByUUID,
  getRaffles,
  updateRaffle,
} from '../api/raffle-api';
import { useRaffleStore } from '../store/useRaffleStore';
import {
  RaffleCreateDto,
  RaffleUpdateDto,
} from '../interfaces/raffle.interface';

const useRaffle = () => {
  const raffleStore = useRaffleStore();
  const {
    raffleCreateDto,
    raffleDetail,
    raffleList,
    raffleUpdateDto,
    raffletShort,
  } = storeToRefs(raffleStore);

  const mainChange = ref(false); 

  const findRaffles = async () => {
    try {
      mainChange.value = false;
      const data = await getRaffles();
      raffleList.value = data;
      mainChange.value = true;
    } catch (error) {
      console.error(error);
    }
  };

  const findOneRaffle = async (id: number) => {
    try {
      const data = await getRaffleById(id);
      raffleDetail.value = data;
    } catch (error) {
      Swal.fire({
        title: 'Error interno en el servidor',
        text: 'Error getting raffle',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
    }
  };

  const findRaffleByUUID = async (uuid: string) => {
    try {
      const data = await getRaffleByUUID(uuid);
      raffletShort.value = data;
    } catch (error) {
      Swal.fire({
        title: 'Error interno en el servidor',
        text: 'Error getting raffle',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
    }
  };

  const create = async (body: RaffleCreateDto) => {
    try {
      body.initialDate =
        new Date(body.initialDate).toISOString().split('T')[0] + 'T00:00:00';
      body.finalDate =
        new Date(body.finalDate).toISOString().split('T')[0] + 'T23:59:59';
      await createRaffle(body);
    } catch (error) {
      Swal.fire({
        title: 'Error interno en el servidor',
        text: 'Error creating raffle',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
    }
  };

  const update = async (raffleId: number, body: RaffleUpdateDto) => {
    try {
      await updateRaffle(raffleId, body);
    } catch (error) {
      Swal.fire({
        title: 'Error interno en el servidor',
        text: 'Error updating raffle',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
    }
  };

  const shareUrlInClipboard = async () => {
    let urlToShare = !raffleDetail.value?.url
      ? 'No URL'
      : raffleDetail.value.url;

    try {
      const { state } = await navigator.permissions.query({
        name: 'clipboard-write' as PermissionName,
      });
      if (state === 'granted' || state === 'prompt') {
        await navigator.clipboard.writeText(urlToShare);
        Swal.fire({
          title: "Copiado Exitosamente",
          icon: "success"
        });
      } else {
        console.error('Permission to write to clipboard was denied');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
      Swal.fire({
        title: 'Error',
        text: 'No se puedo copiar correctamente',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
    }
  };

  return {
    // state
    raffleCreateDto,
    raffleDetail,
    raffleList,
    raffleUpdateDto,
    raffletShort,

    // getters
    winnersName: computed(() => {
      return (
        raffleDetail.value.Winner?.map(
          (winner) => winner.Participant.username
        ) || []
      );
    }),

    // actions
    findRaffles,
    findOneRaffle,
    findRaffleByUUID,
    create,
    update,
    resetRaffleCreateDto: raffleStore.resetRaffleCreateDto,
    shareUrlInClipboard,
    mainChange,
  };
};

export default useRaffle;
