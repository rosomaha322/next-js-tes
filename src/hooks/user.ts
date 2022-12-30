import { useMutation } from '@tanstack/react-query';
import * as api from '@/src/api/user';
import { FormValues } from '@/src/api/user';
import { AxiosResponse } from 'axios';

type CustomError = {
  response: {
    data: {
      errors?: FormValues;
    };
  };
} & Error;

export const useSubmitRegister = () => {
  return useMutation<AxiosResponse, CustomError, FormValues>((values) =>
    api.registerUser(values)
  );
};
