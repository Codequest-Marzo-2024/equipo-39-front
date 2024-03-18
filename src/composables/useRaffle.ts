import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import {
  createRaffle,
  getRaffleById,
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
  const { raffleCreateDto, raffleDetail, raffleList, raffleUpdateDto } =
    storeToRefs(raffleStore);

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

  const create = async (body: RaffleCreateDto) => {
    try {
      await createRaffle(body);
    } catch (error) {
      throw new Error('Error creating raffle');
      // TODO: Show a toast message
    }
  };

  const update = async (body: RaffleUpdateDto) => {
    try {
      await updateRaffle(body);
    } catch (error) {
      throw new Error('Error updating raffle');
      // TODO: Show a toast message
    }
  };

  const shareUrlInClipboard = () => {
    let urlToShare = !raffleDetail.value?.url
      ? 'No URL'
      : raffleDetail.value.url;

    navigator.clipboard.writeText(urlToShare);

    // TODO: Show a toast message
  };

  return {
    // state
    raffleCreateDto,
    raffleDetail,
    raffleList,
    raffleUpdateDto,

    // getters
    winnersName: computed(() => {
      return raffleDetail.value.Winner?.map(
        (winner) => winner.Participant.username
      ) || [];
    }),

    // actions
    findRaffles,
    findOneRaffle,
    create,
    update,
    resetRaffleCreateDto: raffleStore.resetRaffleCreateDto,
    shareUrlInClipboard,
  };
};

export default useRaffle;
