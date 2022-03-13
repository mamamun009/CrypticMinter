import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UploadSection from './UploadSection';
import DataSection from './DataSection';
import PropertiesSection from './PropertiesSection';
import ExtrasSection from './ExtrasSection';
import CollectionSection from './CollectionSection';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const initialValues = {
  file: null,
  label: '',
  description: '',
  tags: [],
  properties: [],
  royalties: false,
  royaltyPercentage: 30,
  unlockable: false,
  unlockableContent: '',
  isCollaboration: false,
  collaborationPartner: {
    walletAddress: '',
    percentage: 30,
  },
  isPhysical: true,
  collection: '',
};

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required('Required'),
  label: Yup.string().required('Label is required'),
  description: Yup.string().required('Description is required'),
  tags: Yup.array().of(Yup.string()),
  properties: Yup.array().of(
    Yup.object().shape({
      id: Yup.string(),
      type: Yup.string(),
      value: Yup.string(),
    })
  ),
  royalties: Yup.boolean(),
  royaltyPercentage: Yup.number().when('royalties', {
    is: true,
    then: Yup.number().required('Required'),
  }),
  unlockable: Yup.boolean(),
  unlockableContent:
    // Yup.array()
    // .of(
    Yup.string()
      // )
      .when('unlockable', {
        is: true,
        // then: Yup.array().required('Required'),
        then: Yup.string().required('Required'),
      }),
  isCollaboration: Yup.boolean(),
  collaborationPartner:
    //  Yup.array()
    //   .of(
    Yup.object()
      // )
      .when('isCollaboration', {
        is: true,
        // then: Yup.array().required('Required'),
        then: Yup.object()
          .shape({
            walletAddress: Yup.string().required('Required'),
            percentage: Yup.number().required('Required'),
          })
          .required('Required'),
      }),
  isPhysical: Yup.boolean(),
  collection: Yup.string(),
});

const CreateSingleForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/overview');
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className="space-y-12 ">
      <UploadSection formik={formik} index={1} />
      <DataSection formik={formik} index={2} />
      <PropertiesSection formik={formik} index={3} />
      <CollectionSection formik={formik} index={4} />
      <ExtrasSection formik={formik} index={5} />

      <div className="flex justify-center w-full ">
        <button
          type="button"
          className="w-48 px-6 py-4 font-medium leading-4 text-white rounded-md bg-blue-dark font-madeOuterSans"
          onClick={formik.submitForm}
        >
          Mint NFT
        </button>
      </div>

      {loading && <Loader />}
    </section>
  );
};

export default CreateSingleForm;
