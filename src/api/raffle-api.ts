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

export const getRaffle = async (id: number) => {
  const response = await api.get<RaffleDetail>(`/raffles/${id}`);
  return response.data;
};
