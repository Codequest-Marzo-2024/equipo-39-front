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

  const registerParticipantInRaffle = async (raffleId: number) => {
    try {
      await registerParticipant(raffleId, participantRegisterDto.value);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    // state
    participantList,
    participantRegisterDto,
    // getters

    // actions
    findParticipantsByRaffle,
    registerParticipantInRaffle,
  };
};

export default useParticipants;
