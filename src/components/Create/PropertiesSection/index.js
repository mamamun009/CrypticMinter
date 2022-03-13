import SelectField from '../SelectField';
import SwitchDisclosure from '../SwitchDisclosure';
import Title from '../Title';
import AddMultiple from './AddMultiple';

const PropertiesSection = ({ formik, index, edit }) => {
  return (
    <div>
      <Title number={index} title="Properties" locked={edit} />
      <AddMultiple formik={formik} disabled={edit} />

      <SwitchDisclosure
        className="mt-6"
        title="Royalties"
        description="Collect a fee when a user re-sells an item you originally created. This is deducted from the final sale price and paid monthly to a payout address of your choosing."
        open={formik.values.royalties}
        setOpen={(value) => {
          formik.setFieldValue('royalties', value);
        }}
      >
        <div className="max-w-[130px]">
          <SelectField
            name="royaltyPercentage"
            label="Percentage"
            {...formik.getFieldProps('royaltyPercentage')}
            error={
              formik.touched.royaltyPercentage &&
              formik.errors.royaltyPercentage
            }
            options={
              // 5 to 100 in 5 increments
              [...Array(21).keys()].map((i) => ({
                value: i * 5,
                label: `${i * 5}%`,
              }))
            }
          />
        </div>
      </SwitchDisclosure>
    </div>
  );
};

export default PropertiesSection;
