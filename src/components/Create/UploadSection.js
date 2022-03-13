import Title from './Title';
import Dropzone from '../Utils/Dropzone';

const UploadSection = ({ formik, index }) => {
  return (
    <div>
      <Title
        number={index}
        title="Upload your kicks to the mainnet."
        subtitle="Formats supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 40 MB"
      />
      <div>
        <Dropzone
          value={formik.values.file}
          setValue={(value) => formik.setFieldValue('file', value)}
          maxFiles={2}
          maxSize={40 * 1024 * 1024}
          accept={[
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/svg+xml',
            'video/mp4',
            'video/webm',
            'audio/mpeg',
            'audio/wav',
            'audio/ogg',
            'model/gltf+json',
            'model/gltf-binary',
          ]}
          info="This artwork can be found elsewhere and may be susceptible to
          copyright issues"
        />
      </div>
    </div>
  );
};

export default UploadSection;
