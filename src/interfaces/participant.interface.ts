export interface ParticipantRegisterDto {
  username: string;
  idPlatform: string;
}

export interface ParticipantList {
  id: number;
  idPlatform: string;
  username: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  raffleId: number;
}

export interface WinnerList {
  id: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  raffleId: number;
  participantId: number;
  Participant: Participant;
}

export interface Participant {
  id: number;
  username: string;
}

export interface ParticipantRegisted {
  id: number;
  idPlatform: string;
  username: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  raffleId: number;
}
