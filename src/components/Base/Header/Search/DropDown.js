import CollectionItem from './CollectionItem';
import CreatorItem from './CreatorItem';
import ArtworkItem from './ArtworkItem';
import collections from '../../../../data/collections';
import creators from '../../../../data/creators';
import artworks from '../../../../data/artworks';
import { useNavigate } from 'react-router-dom';

const DropDown = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-h-[85vh] overflow-y-scroll scrollbar-thin px-6 bg-white border border-t-0 border-gray-300 rounded-b-lg py-7">
      {/* Collections */}
      <div>
        <p className="search_box_heading_d">
          Collections ({collections.length})
        </p>
        <div className="flex flex-col mt-4 space-y-3">
          {collections.slice(0, 3).map((collection) => (
            <CollectionItem
              key={collection.id}
              image={collection.image}
              title={collection.title}
              items={collection.items}
              mobile={false}
            />
          ))}
        </div>
        <button
          className="mt-3 font-medium text-blue-link text-xxs"
          onClick={() => navigate('/search')}
        >
          View more
        </button>
      </div>
      {/* divider */}
      <div className="w-full h-px my-3 bg-gray-400" />
      {/* Creators */}
      <div>
        <p className="search_box_heading_d">
          Creators ({creators.length})
        </p>
        <div className="flex flex-col mt-4 space-y-3">
          {creators.slice(0, 3).map((creator) => (
            <CreatorItem
              key={creator.id}
              image={creator.image}
              name={creator.name}
              verified={creator.verified}
              mobile={false}
            />
          ))}
        </div>
        <button
          className="mt-3 font-medium text-blue-link text-xxs"
          onClick={() => navigate('/search')}
        >
          View more
        </button>
      </div>
      {/* divider */}
      <div className="w-full h-px my-3 bg-gray-400" />
      {/* artworks */}
      <div>
        <p className="search_box_heading_d">
          Artworks ({artworks.length})
        </p>
        <div className="flex flex-col mt-4 space-y-3">
          {artworks.slice(0, 3).map((artwork) => (
            <ArtworkItem
              key={artwork.id}
              image={artwork.image}
              title={artwork.title}
              subtitle={artwork.subtitle}
              mobile={false}
            />
          ))}
        </div>
        <button
          className="mt-3 font-medium text-blue-link text-xxs"
          onClick={() => navigate('/search')}
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default DropDown;
