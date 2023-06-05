/*
creating HTML code
*/
const imageTrack = [
    "/images/homepage/Homepage_Image_1.JPG",
    "/images/homepage/Homepage_Image_2.JPG",
    "/images/homepage/Homepage_Image_3.JPG",
    "/images/homepage/Homepage_Image_4.JPG",
    "/images/homepage/Homepage_Image_5.JPG",
    "/images/homepage/Homepage_Image_6.JPG",
    "/images/homepage/Homepage_Image_7.JPG",
    "/images/homepage/Homepage_Image_8.JPG",
    "/images/homepage/Homepage_Image_9.JPG",
    "/images/homepage/Homepage_Image_10.JPG",
    "/images/homepage/Homepage_Image_11.JPG",
    "/images/homepage/Homepage_Image_12.JPG",
    "/images/homepage/Homepage_Image_13.JPG",
    
]


let imageTrackHTML = '';

imageTrack.forEach((image) => {
    imageTrackHTML += `
        <img class="image" src="${image}" draggable="false">
    `;

});

document.querySelector('.js-track').innerHTML = imageTrackHTML;