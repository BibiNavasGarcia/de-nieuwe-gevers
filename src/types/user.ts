export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: number;
  professionalId: string;
  avatar?: string;
  introduction?: string;
};