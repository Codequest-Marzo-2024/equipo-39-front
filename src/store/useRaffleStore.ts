import { ref } from 'vue';
import { defineStore } from 'pinia';

import {
  RaffleCreateDto,
  RaffleDetail,
  RaffleDetailShort,
  RaffleList,
} from '../interfaces/raffle.interface';

const initialData = {
  raffleCreateDto: {
    name: '',
    description: '',
    url: '',
    initialDate: new Date().toISOString().split('T')[0],
    finalDate: new Date().toISOString().split('T')[0],
  },
  raffletShort: {
    initialDate: '',
    finalDate: '',
    name: '',
    description: '',
    isActive: true,
  },
  raffleDetail: {
    id: 0,
    code: '',
    name: '',
    description: '',
    url: '',
    isActive: true,
    isFinished: false,
    initialDate: '',
    finalDate: '',
    createdAt: '',
    updatedAt: '',
    madeBy: 0,
    User: {
      id: 0,
      email: '',
    },
    Winner: [],
    _count: { Participant: 0 },
  },
};

export const useRaffleStore = defineStore('RaffleStore', () => {
  const raffleList = ref<RaffleList[]>([]);
  const raffleDetail = ref<RaffleDetail>(
    structuredClone(initialData.raffleDetail)
  );
  const raffletShort = ref<RaffleDetailShort>(
    structuredClone(initialData.raffletShort)
  );
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
    raffletShort,
    raffleCreateDto,
    raffleUpdateDto,

    // getters

    // actions
    resetRaffleCreateDto,
  };
});
