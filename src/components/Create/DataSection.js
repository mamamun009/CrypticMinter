import Title from './Title';
import TextField from './TextField';
import TagSelector from './TagSelector';
import TextEditor from './TextEditor';

const DataSection = ({ formik, index, edit }) => {
  return (
    <div>
      <Title
        number={index}
        title="Metadata"
        subtitle="Describe your kicks so everyone in the metaverse can get aquainted with your dunks."
      />

      <div className="mt-2 space-y-10">
        <div className="">
          <TextField
            label="Label"
            name="label"
            placeholder='e. g. "Nike Air Jordan 1...'
            {...formik.getFieldProps('label')}
            error={formik.touched.label && formik.errors.label}
            disabled={edit}
            lock={edit}
          />
        </div>

        <TextEditor
          label="Description"
          name="description"
          placeholder="e. g. “First wore by MJ in his 1997 playoffs..."
          value={formik.values.description}
          onChange={(val) => formik.setFieldValue('description', val)}
          error={formik.touched.description && formik.errors.description}
          disabled={edit}
        />

        <div className="">
          <TagSelector
            label="Tags"
            name="tags"
            placeholder='e. g. "CactusJack...'
            formik={formik}
          />
        </div>
      </div>
    </div>
  );
};

export default DataSection;
