import { ref } from 'vue';
import { defineStore } from 'pinia';
import {
  ParticipantList,
  ParticipantRegisterDto,
} from 'src/interfaces/participant.interface';

const initialData = {
  participantRegisterDto: {
    username: '',
    idPlatform: '',
  },
};

export const useParticipantStore = defineStore('ParticipantStore', () => {
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
    participantList,
    participantRegisterDto,

    // getters

    // actions
    resetParticipantRegisterDto,
  };
});
