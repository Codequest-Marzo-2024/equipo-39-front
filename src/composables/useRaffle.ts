import { storeToRefs } from 'pinia';

import { createRaffle, getRaffle, getRaffles, updateRaffle } from '../api/raffle-api';
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

  const create = async (body: RaffleCreateDto) => {
    try {
      await createRaffle(body);
    } catch (error) {
      console.error(error);
      throw new Error('Error creating raffle');
    }
  };

  const update = async (body: RaffleUpdateDto) => {
    try {
      await updateRaffle(body);
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
    create,
    update,
    resetRaffleCreateDto: raffleStore.resetRaffleCreateDto,
  };
};

export default useRaffle;
