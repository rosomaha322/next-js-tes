import { Form, Field, Formik, FormikProps, FormikErrors } from 'formik';
import {
  FormWrapper,
  ButtonPrimary,
  Loader,
  ErrorBlock,
} from '@/src/common/components';
import { BUTTON_SIZES } from '@/src/constants/elementsUI';
import { FormTextField } from '@/src/common/components';
import { useSubmitRegister } from '@/src/hooks/user';
import { FormValues } from '@/src/api/user';

// styles
import { StyledInputsWrapper } from './RegisterStyles';


const validate = (values: FormValues) => {
  const errors: FormikErrors<{ [key: string]: string }> = {};
  const required = 'Required';
  if (!values.name) {
    errors.name = required;
  }
  if (!values.email) {
    errors.email = required;
  }
  if (!values.password) {
    errors.password = required;
  }
  if (!values.confirm_password) {
    errors.confirm_password = required;
  }
  if (
    values.confirm_password &&
    values.confirm_password &&
    values.confirm_password !== values.password
  ) {
    const message = "password don't match";
    errors.password = message;
    errors.confirm_password = message;
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const SignUpForm = () => {
  const buttonText = 'SUBMIT';
  const { mutate, isLoading, isSuccess, error } = useSubmitRegister();
  const { message } = error || {};

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={(values, { setErrors, resetForm }) => {
          mutate(values, {
            onSuccess: () => resetForm(),
            onError: (e) => {
              const {
                response: { data },
              } = e;
              setErrors(data?.errors || {});
            },
          });
        }}
        validate={validate}
      >
        {({ touched, errors, dirty }: FormikProps<FormValues>) => (
          <>
            <FormWrapper title="Register">
              <Form className="auth-form sign-up-form">
                <Loader show={isLoading} />
                <div className="form-body">
                  <StyledInputsWrapper>
                    <div className="row-wrapper">
                      <div className="form-row">
                        <Field
                          name="name"
                          id="name"
                          placeholder="Name"
                          component={FormTextField}
                          error={touched.name ? errors.name : null}
                        />
                      </div>
                      <div className="form-row">
                        <Field
                          name="email"
                          id="email"
                          placeholder="Email"
                          component={FormTextField}
                          error={touched.email ? errors.email : null}
                        />
                      </div>
                    </div>
                    <div className="row-wrapper">
                      <div className="form-row">
                        <Field
                          name="password"
                          id="password"
                          placeholder="Password"
                          component={FormTextField}
                          error={touched.password ? errors.password : null}
                        />
                      </div>
                      <div className="form-row">
                        <Field
                          name="confirm_password"
                          id="confirm_password"
                          placeholder="Confirm password"
                          component={FormTextField}
                          error={
                            touched.confirm_password
                              ? errors.confirm_password
                              : null
                          }
                        />
                      </div>
                    </div>
                  </StyledInputsWrapper>
                  <div className="form-action">
                    <ButtonPrimary
                      text={buttonText}
                      size={BUTTON_SIZES.medium}
                      type="submit"
                      successMessage="Thank You"
                      isSubmitted={!dirty && isSuccess}
                      disabled={isLoading}
                    />
                  </div>
                  {message && <ErrorBlock error={message} />}
                </div>
              </Form>
            </FormWrapper>
          </>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
