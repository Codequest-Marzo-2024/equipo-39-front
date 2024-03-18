import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  RaffleCreateDto,
  RaffleDetail,
  RaffleList,
} from 'src/interfaces/raffle.interface';

export const useRaffleStore = defineStore('RaffleStore', () => {
  const raffleList = ref<RaffleList[]>([]);
  const raffleDetail = ref<RaffleDetail>();
  const raffleCreateDto = ref<RaffleCreateDto>();
  const raffleUpdateDto = ref<RaffleCreateDto>();

  return {
    // state
    raffleList,
    raffleDetail,
    raffleCreateDto,
    raffleUpdateDto,

    // getters

    // actions
  };
});
