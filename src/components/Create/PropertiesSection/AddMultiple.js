import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropertyFields from './PropertyFields';

const AddMultiple = ({ formik, disabled }) => {
  const [type, setType] = useState('');
  const [value, setValue] = useState('');

  const onBlur = () => {
    if (type && value) {
      formik.setFieldValue('properties', [
        {
          id: nanoid(10),
          type,
          value,
        },
        ...formik.values.properties,
      ]);
      setType('');
      setValue('');
    }
  };

  return (
    <div className="mt-6 space-y-4">
      <PropertyFields
        type={type}
        value={value}
        onTypeChange={(e) => {
          setType(e.target.value);
        }}
        onValueChange={(e) => {
          setValue(e.target.value);
        }}
        onTypeBlur={onBlur}
        onValueBlur={onBlur}
        disabled={disabled}
      />
      {formik.values.properties.map((property) => (
        <PropertyFields
          key={property.id}
          type={property.type}
          value={property.value}
          onTypeChange={(e) => {
            formik.setFieldValue(
              'properties',
              formik.values.properties.map((p) => {
                if (p.id === property.id) {
                  return { ...p, type: e.target.value };
                }
                return p;
              })
            );
          }}
          onValueChange={(e) => {
            formik.setFieldValue(
              'properties',
              formik.values.properties.map((p) => {
                if (p.id === property.id) {
                  return { ...p, value: e.target.value };
                }
                return p;
              })
            );
          }}
          onRemove={() => {
            formik.setFieldValue(
              'properties',
              formik.values.properties.filter((p) => p.id !== property.id)
            );
          }}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default AddMultiple;
