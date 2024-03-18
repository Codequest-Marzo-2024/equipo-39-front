import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { getParticipants, registerParticipant } from '../api/participants-api';
import { useParticipantStore } from '../store/useParticipantStore';

const useParticipants = () => {
  const participantStore = useParticipantStore();
  const { participantList, participantRegisterDto } =
    storeToRefs(participantStore);

  const findParticipantsByRaffle = async (raffleId: number) => {
    try {
      const data = await getParticipants(raffleId);
      participantList.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  const registerParticipantInRaffle = async (raffleUUID: string) => {
    try {
      await registerParticipant(raffleUUID, participantRegisterDto.value);
      return true;
    } catch (error: any) {
      throw new Error(error.response.data.message);
    }
  };

  return {
    // state
    participantList,
    participantRegisterDto,

    // getters
    participantsName: computed(() => {
      return participantList.value.map((participant) => participant.username);
    }),

    // actions
    findParticipantsByRaffle,
    registerParticipantInRaffle,
  };
};

export default useParticipants;
