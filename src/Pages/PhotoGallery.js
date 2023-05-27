import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import '../Styling/PhotoGallery.css'; // Import the CSS file for styling
import { useTranslation } from 'react-i18next';
import { images } from '../Arrays/images';


const PhotoGallery = () => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 6; // Number of images to display per page

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;

    // Get the images to display on the current page
    const currentImages = images.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    return (
        <div className="photo-gallery-container">
            {/* <div className="watermark"></div> */}
            <ImageGallery
                items={currentImages}
                showPlayButton={false}
                showFullscreenButton={false}
                showNav={false}
                thumbnailPosition="bottom"
                renderItem={(item) => (
                    <div>
                        <img
                            src={item.original}
                            alt={item.description}
                            style={{ maxHeight: '500px', maxWidth: '300px' }}
                        />
                    </div>
                )}
            />
            {/* Render pagination controls */}
            <div>
                {currentPage > 1 && (
                    <button className='PreviousButton' onClick={() => handlePageChange(currentPage - 1)}>{t('previous')}</button>
                )}
                {currentPage < Math.ceil(images.length / imagesPerPage) && (
                    <button className='NextButton' onClick={() => handlePageChange(currentPage + 1)}>{t('next')}</button>
                )}
            </div>
        </div>
    );
};

export default PhotoGallery;
