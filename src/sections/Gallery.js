import React from 'react';
import ImageGridDisplay from '../components/ImageGridDisplay';

// Import images from the local directory
import image1 from '../resources/images/im11.jpg';
import image2 from '../resources/images/im2.jpg';
import image3 from '../resources/images/im3.jpg';
import image4 from '../resources/images/im4.jpg';
import image5 from '../resources/images/im5.jpg';
import image6 from '../resources/images/im6.jpg';
import image7 from '../resources/images/im7.jpg';
import image8 from '../resources/images/im8.jpg';
import image9 from '../resources/images/im9.jpg';
import image10 from '../resources/images/im10.jpg';
import image11 from '../resources/images/im12.jpg';
import image12 from '../resources/images/im13.jpg';
import image13 from '../resources/images/im14.jpg';
import image14 from '../resources/images/im15.jpg';
import image15 from '../resources/images/im16.jpg';

function Gallery() {
    // Create an array of imported images
    let firstBlockImages = [
        {src: image2, title: ''},
        {src: image3, title: ''},
        {src: image4, title: ''},
        {src: image5, title: ''},
        {src: image1, title: ''},
    ];

    let secondBlockImages = [
        {src: image6, title: ''},
        {src: image7, title: ''},
        {src: image8, title: ''},
        {src: image9, title: '' },
        {src: image10, title: ''},
    ];
    
    let thirdBlockImages = [
        {src: image11, title: ''},
        {src: image12, title: ''},
        {src: image13, title: ''},
        {src: image14, title: ''},
        {src: image15, title: ''},
    ];

    return (
        <div className="container text-start row">
            <div><h1>Gallery</h1></div>
            <ImageGridDisplay mainImage={"left"} images={firstBlockImages} modalId="imageModal1"/>
            <ImageGridDisplay mainImage={"right"} images={secondBlockImages} modalId="imageModal2"/>
            <ImageGridDisplay mainImage={"left"} images={thirdBlockImages} modalId="imageModal3"/>
        </div>
    );
}

export default Gallery;
