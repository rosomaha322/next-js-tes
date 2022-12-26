import { Form, Field, Formik, FormikProps, FormikErrors } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormWrapper, ButtonPrimary, Loader } from '@/src/common/components';
import { BUTTON_SIZES } from '@/src/constants/elementsUI';
import { registerActions } from '@/src/redux/actions/user/user';
import { FormTextField } from '@/src/common/components';
import { IRootState } from '@/src/redux/reducers';

// styles
import { StyledInputsWrapper } from './RegisterStyles';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

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
  const dispatch = useDispatch();
  const { loading } = useSelector((state: IRootState) => state.user);

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          name: '',
          password: '',
          confirm_password: '',
        }}
        onSubmit={(values, { setErrors }) => {
          dispatch(registerActions.request({ ...values, setErrors }));
        }}
        validate={validate}
      >
        {({
          touched,
          errors,
          submitCount,
          isValid,
          isSubmitting,
        }: FormikProps<FormValues>) => (
          <>
            <FormWrapper title="Register">
              <Form className="auth-form sign-up-form">
                <Loader show={loading} />
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
                      isSubmitted={!!(submitCount && isValid && isSubmitting)}
                    />
                  </div>
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
