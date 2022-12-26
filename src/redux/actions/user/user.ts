import { createAsyncAction } from 'typesafe-actions';
import { RegisterActionTypes, RegisterErrorType } from './types';
import { FormikErrors } from 'formik';

export const registerActions = createAsyncAction(
  RegisterActionTypes.REGISTER_REQUEST,
  RegisterActionTypes.REGISTER_SUCCESS,
  RegisterActionTypes.REGISTER_FAILURE
)<
  {
    email: string;
    password: string;
    name: string;
    confirm_password: string;
    setErrors: (errors: FormikErrors<{ [key: string]: string }>) => void;
    setStatus: (data: string) => void;
  },
  { email: string },
  { error: RegisterErrorType }
>();
