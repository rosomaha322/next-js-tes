import axios from '@/src/lib/axios';

export type FormValues = {
    name: string;
    email: string;
    password: string;
    confirm_password: string;
}

export const registerUser = async (values: FormValues) => {
  const { data } = await axios.post('/api/fake-register', values);
  return data;
};
