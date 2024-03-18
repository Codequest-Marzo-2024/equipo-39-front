import { ref } from 'vue';
import { defineStore } from 'pinia';

import {
  ParticipantList,
  ParticipantRegisterDto,
  WinnerList,
} from '../interfaces/participant.interface';

const initialData = {
  participantRegisterDto: {
    username: '',
    idPlatform: '',
  },
};

export const useParticipantStore = defineStore('ParticipantStore', () => {
  const winnerList = ref<WinnerList[]>([]);
  const participantList = ref<ParticipantList[]>([]);
  const participantRegisterDto = ref<ParticipantRegisterDto>(
    structuredClone(initialData.participantRegisterDto)
  );

  const resetParticipantRegisterDto = () => {
    participantRegisterDto.value = structuredClone(
      initialData.participantRegisterDto
    );
  };

  return {
    // state
    winnerList,
    participantList,
    participantRegisterDto,

    // getters

    // actions
    resetParticipantRegisterDto,
  };
});
