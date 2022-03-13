import { useFormik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  username: '',
  email: '',
};

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const RegistrationForm = ({ onClose }) => {
  const onSubmit = (values, { setErrors }) => {
    localStorage.setItem('user', JSON.stringify(values));
    onClose();

    // Set errors after submit if any like this:
    // setErrors({
    //   username: 'Username is required',
    //   email: 'Email is required',
    // });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-3 space-y-7.5">
      <div className="relative flex flex-col">
        <label htmlFor="username" className="text-lg font-bold">
          Username <span className="text-red">*</span>{' '}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="@CokeBoys..."
          {...formik.getFieldProps('username')}
          className={`mt-2 py-4 px-5 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-0
        ${
          formik.touched.username && formik.errors.username
            ? 'border-red focus:border-red'
            : ''
        }
          `}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="absolute mt-1 text-sm origin-bottom-left -bottom-6 text-red">
            {formik.errors.username}
          </div>
        ) : null}
      </div>
      <div className="relative flex flex-col">
        <label htmlFor="email" className="text-lg font-bold">
          Email <span className="text-red">*</span>{' '}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="cokeboys@gmail.com"
          {...formik.getFieldProps('email')}
          className={`mt-2 py-4 px-5 text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-0
        ${
          formik.touched.email && formik.errors.email
            ? 'border-red focus:border-red'
            : ''
        }
          `}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="absolute mt-1 text-sm origin-bottom-left -bottom-6 text-red">
            {formik.errors.email}
          </div>
        ) : null}
      </div>

      <div className="flex justify-center w-full !mt-8.5">
        <button className="w-full max-w-xs p-4 font-medium text-center text-white transition-shadow duration-150 rounded-md font-madeOuterSans bg-blue-light hover:shadow-lg focus:ring-2 focus:ring-offset-1 focus:ring-blue-light ">
          Complete Registration
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
