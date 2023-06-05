const projects = [
    {
        image: "/images/projects/OTV_Image.jpg",
        title: "Over Terrain Vehicle (OTV)",
        date: "May 15th, 2023",
        description: "I helped create, design, and code an OTV for UMD's ENES100 class. The mission of this project was to create an OTV that would be able to take a sample of water, run tests on it, and then go through an obstacle course. I was in charge of the navigation, motor, and ultrasonic sensor code.",
        tags: ["ARDUINO", "CAD", "CIRCUIT", "ROBOTICS"]
    }, {
        image: "/images/projects/Arduino_Music_Player_Image.jpg",
        title: "Arduino Music Player",
        date: "January 12th, 2023",
        description: "I coded a passive buzzer so that it could play all 88 keys from the piano. I used those keys to play the first couple measures of the song \"Ignite (ft. Zedd)\"",
        tags: ["Arduino", "Circuit"]
    }, {
        image: "/images/projects/Wright_Stuff_Image.PNG",
        title: "Wright Stuff",
        date: "April 2nd, 2022",
        description: "I created a rubber-band powered plane for the event Wright Stuff for the 2021-2022 season for Science Olympiad. I placed first in Maryland's state competition with a total flight time of 93.75 seconds.",
        tags: ["Woodworking"]
    }, {
        image: "/images/projects/WiFi_Lab_Image.PNG",
        title: "WiFi Lab",
        date: "April 2nd, 2022",
        description: "I created a Yagi-Uda antenna out of aluminum wire that could transmit a signal at 2.4 GHz. It had a higher dBm reading than the threshold dBm reading obtained by a 3.1 cm monopole antenna up to 5 meters. I placed third in Maryland's state competition",
        tags: ["Antenna", "Soldering"]
    }
]

let projectsHTML = '';

/*
1. fix tags
2. can't seem to access object descriptions for some reason
*/
/*
projects.forEach((project) => {
    
    let tagsHTML = '';
    for (let i=0; i < tags.length; i++) {
        tagsHTML += `
            <div class="tag">${tags}</div>
        `;
    }
    
    projectsHTML += `
        <div class="project-container">
            <img class="project-image" src="${projects.image}" draggable="false">
            
            <div class="project-info">
                <div class="project-title">
                    ${title}
                </div>
                <div class="project-date">
                    ${date}
                </div>
                <div class="project-description">
                   ${description}
                </div>
                <div class="project-tags">
                    
                </div>
            </div>
        </div>
    `
})

document.querySelector('.project-grid').innerHTML = projectsHTML;

console.log(projectsHTML);
*/