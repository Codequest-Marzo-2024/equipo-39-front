import { storeToRefs } from 'pinia';
import { useParticipantStore } from '../store/useParticipantStore';
import { drawRaffle } from '../api/raffle-api';
import { getWinners } from '../api/raffle-api';
import { ref } from 'vue';

const useDrawRaffle = () => {
  const participantStore = useParticipantStore();
  const { winnerList } = storeToRefs(participantStore);
  const isFetching = ref(false);

  const getDrawRaffle = async (raffleId: number) => {
    try {
      isFetching.value = true;
      await drawRaffle(raffleId, 1);
      const data = await getWinners(raffleId);
      winnerList.value = data;
    } catch (error) {
      console.error(error);
    } finally {
      isFetching.value = false;
    }
  };

  return {
    // state
    winnerList,
    isFetching,

    // getters

    // actions
    getDrawRaffle,
  };
};

export default useDrawRaffle;
