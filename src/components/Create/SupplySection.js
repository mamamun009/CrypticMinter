import Title from './Title';
import TextField from './TextField';

const SupplySection = ({ formik, index }) => {
  return (
    <div>
      <Title
        number={index}
        title="Supply"
        subtitle="The number of copies that can be minted. No gas cost on you!"
      />

      <div className="mt-4">
        <TextField
          name="supply"
          placeholder='e. g. "10..'
          {...formik.getFieldProps('supply')}
          error={formik.touched.label && formik.errors.label}
        />
      </div>
    </div>
  );
};

export default SupplySection;
