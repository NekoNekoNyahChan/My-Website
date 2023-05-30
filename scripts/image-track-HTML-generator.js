/*
creating HTML code
*/
const imageTrack = [
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG",
    "/images/Homepage_Image_2.JPG"
]


let imageTrackHTML = '';

imageTrack.forEach((image) => {
    imageTrackHTML += `
        <img class="image" src="${image}" draggable="false">
    `;

});

document.querySelector('.js-track').innerHTML = imageTrackHTML;