export interface RaffleCreateDto {
  name: string;
  description: string;
  url: string;
  initialDate: string;
  finalDate: string;
}


export interface RaffleUpdateDto extends Partial<RaffleCreateDto> {}


export interface RaffleList {
  id: number;
  code: string;
  name: string;
  description: string;
  url: string;
  isActive: boolean;
  isFinished: boolean;
  initialDate: string;
  finalDate: string;
  createdAt: string;
  updatedAt: string;
  madeBy: number;
  User: User;
  _count: Count;
}

export interface User {
  id: number;
  email: string;
}

export interface Count {
  Participant: number;
}


export interface RaffleDetail {
  id: number;
  code: string;
  name: string;
  description: string;
  url: string;
  isActive: boolean;
  isFinished: boolean;
  initialDate: string;
  finalDate: string;
  createdAt: string;
  updatedAt: string;
  madeBy: number;
  User: User;
  Winner: Winner[];
  _count: Count;
}

export interface Winner {
  id: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  raffleId: number;
  participantId: number;
}

