import api from '../common/utils/axios-global';
import {
  ParticipantList,
  ParticipantRegisted,
  ParticipantRegisterDto,
} from '../interfaces/participant.interface';

export const getParticipants = async (raffleId: number) => {
  const response = await api.get<ParticipantList[]>(
    `/raffles/${raffleId}/participants`
  );
  return response.data;
};

export const registerParticipant = async (
  raffleUUID: string,
  body: ParticipantRegisterDto
) => {
  const response = await api.post<ParticipantRegisted>(
    `/raffles/${raffleUUID}/participant`,
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
