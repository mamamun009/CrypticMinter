import ProfilePic from './ProfilePic';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { checkIcon, notificationImage, searchIcon } from '../../assets/icons';
import TextField from './TextField';
import SelectField from './SelectField';
import TextEditor from './TextEditor';
import LinksBox from './LinksBox';
import Icon from '../Utils/Icon';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  profilePic: null,
  name: '',
  address: '',
  street1: '',
  street2: '',
  city: '',
  state: '',
  postalCode: '',
  country: '',
  phone: '',
  username: '',
  email: '',
  bio: '',
  links: {
    discord: '',
    telegram: '',
    twitter: '',
    instagram: '',
    site: '',
  },
};

const validationSchema = Yup.object().shape({
  profileImage: Yup.mixed(),
  name: Yup.string(),
  address: Yup.string(),
  street1: Yup.string(),
  street2: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  postalCode: Yup.string(),
  country: Yup.string(),
  phone: Yup.string(),
  username: Yup.string(),
  email: Yup.string(),
  bio: Yup.string(),
  links: Yup.object().shape({
    discord: Yup.string(),
    telegram: Yup.string(),
    twitter: Yup.string(),
    instagram: Yup.string(),
    site: Yup.string(),
  }),
});

const EditForm = () => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    navigate('/profile');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="grid grid-cols-2 gap-20 mt-20 mb-14">
      <div>
        <ProfilePic
          profilePic={
            (formik.values.profilePic &&
              URL.createObjectURL(formik.values.profilePic)) ||
            notificationImage
          }
          setProfilePic={(profilePic) =>
            formik.setFieldValue('profilePic', profilePic)
          }
        />

        <div className="mt-32">
          <h3 className="font-medium">Shipping Address</h3>
          <div className="mt-8">
            <TextField
              label="Name"
              name="name"
              placeholder="John Appleseed"
              {...formik.getFieldProps('name')}
              error={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className="mt-8">
            <TextField
              label="Address"
              name="address"
              placeholder="Search for an address"
              {...formik.getFieldProps('address')}
              error={formik.touched.address && formik.errors.address}
              icon={searchIcon}
            />
            <TextField
              name="street1"
              placeholder="Street 1"
              {...formik.getFieldProps('street1')}
              error={formik.touched.street1 && formik.errors.street1}
            />
            <TextField
              name="street2"
              placeholder="Street 2"
              {...formik.getFieldProps('street2')}
              error={formik.touched.street2 && formik.errors.street2}
            />
            <TextField
              name="city"
              placeholder="City"
              {...formik.getFieldProps('city')}
              error={formik.touched.city && formik.errors.city}
            />
            <div className="grid grid-cols-10 gap-1.5">
              <div className="col-span-6">
                <SelectField
                  name="state"
                  placeholder="State/Region"
                  {...formik.getFieldProps('state')}
                  error={formik.touched.state && formik.errors.state}
                  options={[
                    { value: 'AL', label: 'Alabama' },
                    { value: 'AK', label: 'Alaska' },
                    { value: 'AZ', label: 'Arizona' },
                    { value: 'AR', label: 'Arkansas' },
                    { value: 'CA', label: 'California' },
                    { value: 'CO', label: 'Colorado' },
                    { value: 'CT', label: 'Connecticut' },
                    { value: 'DE', label: 'Delaware' },
                  ]}
                />
              </div>
              <div className="col-span-4">
                <TextField
                  name="postalCode"
                  placeholder="Postal Code"
                  {...formik.getFieldProps('postalCode')}
                  error={formik.touched.postalCode && formik.errors.postalCode}
                />
              </div>
            </div>
            <div className="grid grid-cols-10 gap-1.5">
              <div className="col-span-6">
                <SelectField
                  name="country"
                  placeholder="Select a Country"
                  {...formik.getFieldProps('country')}
                  error={formik.touched.country && formik.errors.country}
                  options={[
                    { value: 'US', label: 'United States' },
                    { value: 'CA', label: 'Canada' },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <TextField
              label="Phone Number"
              name="phone"
              placeholder="631-039-9039"
              {...formik.getFieldProps('phone')}
              error={formik.touched.phone && formik.errors.phone}
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3 className="font-medium">Account info</h3>
          <div className="mt-8">
            <TextField
              label="Username"
              name="username"
              placeholder="Enter your username"
              {...formik.getFieldProps('username')}
              error={formik.touched.username && formik.errors.username}
            />
          </div>
          <div className="mt-8">
            <TextField
              label="Email"
              name="email"
              placeholder="Enter your email address"
              {...formik.getFieldProps('email')}
              error={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="mt-8">
            <TextEditor
              label="Bio"
              name="bio"
              placeholder="e. g. “First wore by MJ in his 1997 playoffs..."
              {...formik.getFieldProps('bio')}
              error={formik.touched.bio && formik.errors.bio}
            />
          </div>
        </div>

        <div>
          <h3 className="mt-10 font-medium">Social Accounts</h3>
          <div className="mt-8">
            <LinksBox formik={formik} links={formik.values.links} />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="button"
            className="w-full max-w-[208px] border-2 p-4 rounded-full flex items-center gap-4 font-medium text-sm leading-4 text-gray-600/80 fill-gray-600/80"
          >
            <Icon icon={checkIcon} className="w-4 h-4" />
            Verify Your Account
          </button>
        </div>

        <div className="mt-10">
          <p className="text-sm leading-6 text-gray-500">
            To update your settings you should sign message through your wallet.
            Click 'Update profile' then sign the message
          </p>
        </div>

        <div className="w-full h-px my-10 bg-gray-300" />

        <button
          type="button"
          onClick={formik.submitForm}
          className="px-6 py-4 font-medium leading-4 text-white rounded-md bg-blue-light font-madeOuterSans"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default EditForm;
