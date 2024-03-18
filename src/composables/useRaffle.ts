import { storeToRefs } from 'pinia';
import { computed } from 'vue';

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

  const findRaffles = async () => {
    try {
      const data = await getRaffles();
      raffleList.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  const findOneRaffle = async (id: number) => {
    try {
      const data = await getRaffleById(id);
      raffleDetail.value = data;
    } catch (error) {
      throw new Error('Error getting raffle');
      // TODO: Show a toast message
    }
  };

  const findRaffleByUUID = async (uuid: string) => {
    try {
      const data = await getRaffleByUUID(uuid);
      raffletShort.value = data;
    } catch (error) {
      throw new Error('Error getting raffle');
      // TODO: Show a toast message
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
      throw new Error('Error creating raffle');
      // TODO: Show a toast message
    }
  };

  const update = async (raffleId: number, body: RaffleUpdateDto) => {
    try {
      await updateRaffle(raffleId, body);
    } catch (error) {
      throw new Error('Error updating raffle');
      // TODO: Show a toast message
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
        // TODO: Show a toast message
      } else {
        console.error('Permission to write to clipboard was denied');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
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
  };
};

export default useRaffle;
