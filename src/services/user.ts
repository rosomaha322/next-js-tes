import { PayloadAction } from 'typesafe-actions';
import http from './http';
import {
  RegisterActionTypes,
  RegisterResponseType,
} from '../redux/actions/user/types';

export const setToken = (token: string): void =>
  localStorage.setItem('access_token', token);

export const getToken = (): string | null =>
  localStorage.getItem('access_token');

export const resetToken = (): void => localStorage.removeItem('access_token');

export const resetUser = (): void => {
  localStorage.removeItem('persist:root');
  localStorage.removeItem('persist:user');
};

export const registerUser = async (
  action: PayloadAction<
    RegisterActionTypes.REGISTER_REQUEST,
    {
      email: string;
      password: string;
      name: string;
      confirm_password: string;
    }
  >
): Promise<RegisterResponseType> => {
  const { email, password, name, confirm_password } = action.payload;
  const {
    data,
  }: {
    data: RegisterResponseType;
  } = await http('api/fake-register', {
    body: JSON.stringify({
      password,
      email,
      name,
      confirm_password,
    }),
    method: 'POST',
  });

  return data;
};
