
const cyrb53 = function(str, seed = 0) {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
};
// Hash Function Credits: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript

function determineImg(imageName){
    switch(imageName) {
        case "BuildWebsitesFromScratch":
            return <img src={require('../images/courseImgs/Build_Websites_From_Scratch_v2.png')} alt="Build Websites from Scratch"/>
        case "BuildWebsiteUIs":
            return <img src={require('../images/courseImgs/Build_Website_Uis_v2.png')} alt="Build Website UIs"/>
        case "BuildFrontEndWebAppsFromScratch":
            return <img src={require('../images/courseImgs/Build_Websites_From_Scratch_v2.png')} alt="Build Front-End Web Apps"/>
        case "IBMAccelerate2022SoftwareDeveloper":
            return <img src={require('../images/courseImgs/IBM_Accelerate_2022_Software_Developer_Badge.png')} alt="IBM Accelerate 2022 Software Developer"/>
        default:  
        return <img src='' alt="null"/>
    }
  };

export const courseData = [
    {
        id: cyrb53('IBMAccelerate2022SoftwareDeveloper'),
        title: 'IBM Accelerate 2022 - Software Developer',
        imgSrc: determineImg('IBMAccelerate2022SoftwareDeveloper'),
        offeredBy: 'IBM',
        description: 'Learn about Frontend & Backend Technologies used in Software Development such as React JS, Node JS, Material UI, IBM Cloud, Kubernetes, and more. Build a front-end Web App leveraging HTML, CSS, React, and MUI. Use git as a version control tool. Grow programming skills while enhancing core competencies and understanding of coding platforms. Network with fellow IBMers and work as a team',
        dateCompleted: 'August 4, 2022',
        certificateUrl: 'https://www.credly.com/badges/08f751bf-973a-44cf-ad13-0ea5d26d3324/linked_in_profile'
    },
    {
        id: cyrb53('BuildFrontEndWebAppsFromScratch'),
        title: 'Build Front-End Web Apps from Scratch',
        imgSrc: determineImg('BuildFrontEndWebAppsFromScratch'),
        offeredBy: 'Codecademy',
        description: '8-week curriculum for developing interactive front-end applications using JavaScript and ReactJS',
        dateCompleted: 'April 4, 2018',
        certificateUrl: 'https://www.credential.net/717e1acf-cd97-4f91-a756-12b275e5a980'
    },
    {
        id: cyrb53('BuildWebsiteUIs'),
        title: 'Build Website UIs',
        imgSrc: determineImg('BuildWebsiteUIs'),
        offeredBy: 'Codecademy',
        description: '8-week curriculum covering visual user interface design fundamentals on usability, accessibility, color theory, typography, and layout, using HTML, & CSS',
        dateCompleted: 'March 6, 2018',
        certificateUrl: 'https://www.credential.net/7b4e6443-2168-46fa-9933-2d9d0acfcd02#gs.sqoi32'
    },
    {
        id: cyrb53('BuildWebsitesFromScratch'),
        title: 'Build Websites From Scratch',
        imgSrc: determineImg('BuildWebsitesFromScratch'),
        offeredBy: 'Codecademy',
        description: '10-week curriculum of web development fundamentals using HTML, CSS, JavaScript, and Github',
        dateCompleted: 'February 13, 2018',
        certificateUrl: 'https://www.credential.net/34f72a91-bdb8-43f8-a123-187b8110f253#gs.sqkaa4'
    }
]