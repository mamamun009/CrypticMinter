import collections from '../../../data/collections';
import Title from '../Title';
import CreateCollection from './CreateCollection';
import CollectionItem from './CollectionItem';

const CollectionSection = ({ formik, index }) => {
  return (
    <div>
      <Title
        number={index}
        title="Choose collection"
        subtitle="Add to an existing collection or create a new one."
      />

      <div className="flex w-full gap-2 pb-3 mt-6 overflow-x-scroll scrollbar-thin snap-x">
        <CreateCollection />

        {collections.map((collection) => (
          <CollectionItem
            key={collection.id}
            image={collection.image}
            title={collection.title}
            selected={formik.values.collection === collection.id}
            setSelected={() => {
              formik.setFieldValue('collection', collection.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionSection;
