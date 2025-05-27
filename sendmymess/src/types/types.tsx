export interface IUser {
  id: number;
  name: string;
  lastMsg: string;
  avatar: string;
  isOnline: boolean;
  unread: number;
  description: string;
  lastActive: number;
}

export interface IUserMessage {
  isMyMsg: boolean;
  msg: string;
  time: number;
  read: boolean;
  id: number;
}

export interface IDateCommunication {
  dateCommunication: number;
}

export type IMessage = IUserMessage & IDateCommunication;

export interface IMessages {
  idUser: number;
  allMessages: IMessage[];
}
