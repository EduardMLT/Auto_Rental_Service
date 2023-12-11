import { useState } from 'react';
import { Link } from 'react-router-dom';

import { GalleryItemImage } from './SingleCatalogPage.styled';
import { ModalOpen } from '../../ModalOpen/ModalOpen';


 const SingleCatalogPage = ({
  image: { largeImageURL, webformatURL, tags },
}) => {
  console.log('SingleCatalogPage');

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        console.log('SingleCatalogPage');
        <br />
        <Link to="/catalog">Catalog</Link>
        <br />
        console.log('1.1 - ', id);
      </div>

      <GalleryItemImage src={webformatURL} alt={tags} onClick={openModal} />

      <ModalOpen
        isOpen={isModalOpen}
        closeModal={closeModal}
        src={largeImageURL}
        tags={tags}
      />
    </>
  );
};

export default SingleCatalogPage;

// import { Link } from 'react-router-dom';

// const SingleCatalogPage = () => {
//   return (
    // <div>
    //   SingleCatalogPage
    //   <br />
    //   <Link to="/catalog">Catalog</Link>
    //   <br />
    //   console.log('1.1 - ', id);
    // </div>
//   );
// };

// export default SingleCatalogPage;
