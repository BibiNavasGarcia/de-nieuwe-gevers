export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  professionalId: string;
  emailAdress: string;
  phoneNumber?: number;
  avatar?: string;
  introduction?: string;
};