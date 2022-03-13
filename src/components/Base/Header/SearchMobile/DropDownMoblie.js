import CollectionItem from "../Search/CollectionItem";
import CreatorItem from "../Search/CreatorItem";
import ArtworkItem from "../Search/ArtworkItem";
import collections from "../../../../data/collections";
import creators from "../../../../data/creators";
import artworks from "../../../../data/artworks";
// import { useNavigate } from "react-router-dom";
import "./DropDownMobile.css";
import { useState } from "react";
const DropDownMobile = () => {
  // const navigate = useNavigate();
  const [contentNum, setContentNum] = useState(3);
  return (
    <div
      style={{
        width: "100%",
        marginTop: "19px",
        minHeight: '90vh'
      }}
    >
      <div>
        {/* artworks */}
        <div>
          <p className="search_result_heading">Artworks ({artworks.length})</p>
          <div className="flex flex-col mt-4 space-y-3">
            {artworks.slice(0, contentNum).map((artwork) => (
              <>
                <ArtworkItem
                  key={artwork.id}
                  image={artwork.image}
                  title={artwork.title}
                  subtitle={artwork.subtitle}
                  mobile={true}
                />
                <div className="divider" />
              </>
            ))}
          </div>
          <div className="view_all_btn">
            <button onClick={() => setContentNum(artworks.length)}>View All</button>
          </div>
        </div>
        {/* Creators */}
        <div>
          <h3 className="search_result_heading">
            Creators ({creators.length})
          </h3>
          <div className="flex flex-col mt-4 space-y-3">
            {creators.slice(0, contentNum).map((creator) => (
              <>
                <CreatorItem
                  key={creator.id}
                  image={creator.image}
                  name={creator.name}
                  verified={creator.verified}
                  mobile={true}
                />
                <div className="divider" />
              </>
            ))}
          </div>
          <div className="view_all_btn">
            <button onClick={() => setContentNum(creators.length)}>View All</button>
          </div>
        </div>
        <div>
          <p className="search_result_heading">
            Collections ({collections.length})
          </p>
          <div className="flex flex-col mt-4 space-y-3">
            {collections.slice(0, contentNum).map((collection) => (
              <CollectionItem
                key={collection.id}
                image={collection.image}
                title={collection.title}
                items={collection.items}
                mobile={true}
              />
            ))}
          </div>
          <div className="view_all_btn">
            <button onClick={() => setContentNum(creators.length)}>View All</button>
          </div>
          <p className="search_box_m_Footer">Press enter/return to see all results</p>
        </div>
      </div>
    </div>
  );
};

export default DropDownMobile;
