import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  RaffleCreateDto,
  RaffleDetail,
  RaffleList,
} from 'src/interfaces/raffle.interface';

const initialData = {
  raffleCreateDto: {
    name: '',
    description: '',
    url: '',
    initialDate: '',
    finalDate: '',
  },
};

export const useRaffleStore = defineStore('RaffleStore', () => {
  const raffleList = ref<RaffleList[]>([]);
  const raffleDetail = ref<RaffleDetail>();
  const raffleCreateDto = ref<RaffleCreateDto>(
    structuredClone(initialData.raffleCreateDto)
  );
  const raffleUpdateDto = ref<RaffleCreateDto>(
    structuredClone(initialData.raffleCreateDto)
  );

  const resetRaffleCreateDto = () => {
    raffleCreateDto.value = structuredClone(initialData.raffleCreateDto);
  };

  return {
    // state
    raffleList,
    raffleDetail,
    raffleCreateDto,
    raffleUpdateDto,

    // getters

    // actions
    resetRaffleCreateDto,
  };
});
