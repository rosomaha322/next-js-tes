export type FormTextFieldPropsType = {
  type: 'text' | 'number' | 'email' | 'password' | 'tel';
  error?: string;
  placeholder?: string;
  field: {
    name: string;
    value?: string;
    onBlur: () => void;
    onChange: () => void;
  };
  disabled?: boolean;
  submitForm?: () => void;
};
