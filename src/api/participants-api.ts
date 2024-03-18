import api from '../common/utils/axios-global';
import { ParticipantList, ParticipantRegisterDto } from '../interfaces/participant.interface';

export const getParticipants = async (raffleId: number) => {
  const response = await api.get<ParticipantList[]>(
    `/raffles/${raffleId}/participants`
  );
  return response.data;
};

export const registerParticipant = async (
  raffleId: number,
  body: ParticipantRegisterDto
) => {
  const response = await api.post<any>(
    `/raffles/${raffleId}/participant`,
    body
  );
  return response.data;
};

export const deleteParticipant = async (
  raffleId: number,
  participantId: number
) => {
  const response = await api.delete<any>(
    `/raffles/${raffleId}/participant/${participantId}`
  );
  return response.data;
};
