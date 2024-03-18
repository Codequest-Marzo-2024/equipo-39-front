import api from '../common/utils/axios-global';
import {
  RaffleCreateDto,
  RaffleDetail,
  RaffleDetailShort,
  RaffleList,
  RaffleUpdateDto,
} from '../interfaces/raffle.interface';

export const createRaffle = async (body: RaffleCreateDto) => {
  const response = await api.post<any>('/raffles', body);
  return response.data;
};

export const updateRaffle = async (raffleId: number, body: RaffleUpdateDto) => {
  const response = await api.patch<any>(`/raffles/${raffleId}`, body);
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
  const response = await api.get<RaffleDetailShort>(`/raffles/${uuid}/uuid`);
  return response.data;
};

export const drawRaffle = async (raffleId: number, quantityWinners: number) => {
  const response = await api.get<any>(
    `/raffles/${raffleId}/draw/${quantityWinners}`
  );
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
