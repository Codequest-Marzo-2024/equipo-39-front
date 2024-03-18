import api from '../common/utils/axios-global';
import {
  RaffleCreateDto,
  RaffleDetail,
  RaffleList,
  RaffleUpdateDto,
} from '../interfaces/raffle.interface';

export const createRaffle = async (body: RaffleCreateDto) => {
  const response = await api.post<any>('/raffles', body);
  return response.data;
};

export const updateRaffle = async (body: RaffleUpdateDto) => {
  const response = await api.patch<any>('/raffles', body);
  return response.data;
};

export const getRaffles = async () => {
  const response = await api.get<RaffleList[]>('/raffles');
  return response.data;
};

export const getRaffleById = async (id: number) => {
  const response = await api.get<RaffleDetail>(`/raffles/${id}`);
  return response.data;
};

export const getRaffleByUUID = async (uuid: string) => {
  const response = await api.get<RaffleDetail>(`/raffles/${uuid}/uuid`);
  return response.data;
};

export const drawRaffle = async (raffleId: number, winnerId: number) => {
  const response = await api.get<any>(`/raffles/${raffleId}/draw/${winnerId}`);
  return response.data;
};

export const getWinners = async (raffleId: number) => {
  const response = await api.get<any[]>(`/raffles/${raffleId}/winners`);
  return response.data;
};

export const removeWinner = async (raffleId: number) => {
  const response = await api.delete<any>(`/raffles/${raffleId}/winners`);
  return response.data;
};
