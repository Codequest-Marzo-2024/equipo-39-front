import { storeToRefs } from 'pinia';

import { getRaffle, getRaffles } from '../api/raffle-api';
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
      const data = await getRaffle(id);
      raffleDetail.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  const createRaffle = async (body: RaffleCreateDto) => {
    try {
      await createRaffle(body);
      findRaffles();
    } catch (error) {
      console.error(error);
    }
  };

  const updateRaffle = async (body: RaffleUpdateDto) => {
    try {
      await updateRaffle(body);
      findRaffles();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // state
    raffleCreateDto,
    raffleDetail,
    raffleList,
    raffleUpdateDto,

    // getters


    // actions
    findRaffles,
    findOneRaffle,
    createRaffle,
    updateRaffle,
  };
};

export default useRaffle;
