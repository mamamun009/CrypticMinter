import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DataSection from './DataSection';
import PropertiesSection from './PropertiesSection';
import ExtrasSection from './ExtrasSection';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const initialValues = {
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
};

const validationSchema = Yup.object().shape({
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
});

const EditSingleForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/view-item');
    }, 2000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    formik.setValues({
      label: 'The amazing art',
      description:
        'The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.',
      tags: ['NIKE', 'AIR MAX 97', 'SHOES'],
      properties: [
        {
          id: '1',
          type: 'Brand',
          value: 'Nike',
        },
        {
          id: '2',
          type: 'Modal',
          value: 'Air Max 97',
        },
        {
          id: '3',
          type: 'Size',
          value: 'US 10.5',
        },
        {
          id: '4',
          type: 'Atomic Number',
          value: 85,
        },
      ],
      royalties: false,
      royaltyPercentage: 30,
      unlockable: true,
      unlockableContent: 'https://www.privatelink.com',
      isCollaboration: false,
      collaborationPartner: {
        walletAddress: '',
        percentage: 30,
      },
      isPhysical: false,
    });
  }, []);

  return (
    <section className="space-y-12 ">
      <DataSection formik={formik} index={1} edit />
      <PropertiesSection formik={formik} index={2} edit />
      <ExtrasSection formik={formik} index={3} edit />

      <div className="flex justify-center w-full ">
        <button
          type="button"
          className="w-48 px-6 py-4 font-medium leading-4 text-white rounded-md bg-blue-dark font-madeOuterSans"
          onClick={formik.submitForm}
        >
          Update
        </button>
      </div>

      {loading && <Loader />}
    </section>
  );
};

export default EditSingleForm;
