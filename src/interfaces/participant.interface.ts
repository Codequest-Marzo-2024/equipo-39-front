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
