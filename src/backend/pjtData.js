
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
      case "Dasmoto":
        return <img src={require('../pjtImgs/Dasmoto.png')} alt="Dasmoto's Arts Crafts Website"/>
        // break;
      case "MyTimes":
        return <img src={require('../pjtImgs/MyTimes.png')} alt="My Times"/>
      case "TeaCozy":
        return <img src={require('../pjtImgs/Tea_Cozy.png')} alt="Tea Cozy"/>
      case 'SecretAgentSupply':
        return <img src={require('../pjtImgs/SecretAgentSupply.png')} alt="Secret Agent Supply"/>
      case 'TortoiseshellOptics':
        return <img src={require('../pjtImgs/TortoiseShell_Optics.png')} alt="Tortoiseshell Optics"/>
      case 'ColmarAcademyCapstoneProject':
        return <img src={require('../pjtImgs/Colmar_Academy.png')} alt="Colmar Academy - Capstone Project"/>
      case 'BroadwayDesign': 
        return <img src={require('../pjtImgs/Broadway.png')} alt="Broadway Design"/>
      case 'Fotomatic':
        return <img src={require('../pjtImgs/Fotomatic.png')} alt="Fotomatic"/>
      case 'MatchGame': 
        return <img src={require('../pjtImgs/Match-Game.png')} alt="Match Game"/>
      case 'VacationWorld': 
        return <img src={require('../pjtImgs/Vacation-World.png')} alt="Vacation World"/>
      case 'QuinoaAndKaleSaladRecipe': 
        return <img src={require('../pjtImgs/Quinoa_and_Kale_Salad_Recipe.png')} alt="Quinoa and Kale Salad Recipe"/>
      case 'FreshDeals': 
        return <img src={require('../pjtImgs/Fresh_Deals.png')} alt="Fresh Deals"/>
      case 'Trackster': 
        return <img src={require('../pjtImgs/Trackster.png')} alt="Trackster"/>
      case 'Jumpstart': 
        return <img src={require('../pjtImgs/Jumpstart.png')} alt="Jumpstart"/>
      case 'ticketCITY':
        return <img src={require('../pjtImgs/TicketCity.png')} alt="Ticket City"/>
      case 'ValentinesDay2018':
        return <img src={require('../pjtImgs/Valentines-Day2018.png')} alt="Valentines Day 2018"/>
      case 'ReactJSProject':
        return <img src={require('../pjtImgs/ReactJS-Project.png')} alt="ReactJS Sample Project"/>
      case 'TypographyAssignment': 
        return <img src={require('../pjtImgs/Typography.png')} alt="Typography Assignment"/>
      case 'HotelsInSingapore': 
        return <img src={require('../pjtImgs/Hotels-In-Singapore.png')} alt="Hotels in Singapore"/>
      case 'wareHouseCapstoneProject': 
        return <img src={require('../pjtImgs/WareHouse.png')} alt="Warehouse Capstone Project"/>
      default:  
        return <img src='' alt="null"/>
    }
  };

export const projectData = [
    
    {
        key: cyrb53("myTimes"),
        imgSrc: determineImg("MyTimes"),
        title: "My Times",
        description: "...",
        dateCreated: "May 06, 2018",
        siteUrl: "https://kennethrc2401.github.io/MyTimes/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("dasmotoAC"),
        imgSrc: determineImg("Dasmoto"),
        title: "Dasmoto's Arts Crafts",
        description: "...",
        dateCreated: "May 06, 2018",
        siteUrl: "https://kennethrc2401.github.io/Dasmoto-s_Arts_-_Crafts/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("wareHouseCapstoneProject"),
        imgSrc: determineImg("wareHouseCapstoneProject"),
        title: "WareHouse - Capstone Project",
        description: "...",
        dateCreated: "February 21, 2018",
        siteUrl: "https://kennethrc2401.github.io/Warehouse-Capstone-Project/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("hotelsInSingapore"),
        imgSrc: determineImg("HotelsInSingapore"),
        title: "Hotels in Singapore",
        description: "Implementing site Breadcrumb navigation.",
        dateCreated: "February 19, 2018",
        siteUrl: "https://kennethrc2401.github.io/Hotels_In_Singapore-Navigation/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("typographyAssignment"),
        imgSrc: determineImg("TypographyAssignment"),
        title: "Typography - Assignment",
        description: "Assignment for the Codecademy Build Website UIs Pro Intensive course.",
        dateCreated: "February 18, 2018",
        siteUrl: "https://kennethrc2401.github.io/typography-for-ui-cumulative-starting-point/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("reactJSProject"),
        imgSrc: determineImg("ReactJSProject"),
        title: "ReactJS Sample Project",
        description: "...",
        dateCreated: "February 13, 2018",
        siteUrl: "https://kennethrc2401.github.io/ReactJs-Project/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("valentinesDay2018"),
        imgSrc: determineImg("ValentinesDay2018"),
        title: "Valentines Day 2018",
        description: "...",
        dateCreated: "February 12, 2018",
        siteUrl: "https://kennethrc2401.github.io/Valentines-Day-2018/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("ticketCITY"),
        imgSrc: determineImg("ticketCITY"),
        title: "ticketCITY",
        description: "...",
        dateCreated: "February 01, 2018",
        siteUrl: "https://kennethrc2401.github.io/ticketCITY/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("jumpstart"),
        imgSrc: determineImg("Jumpstart"),
        title: "Jumpstart",
        description: "...",
        dateCreated: "January 09, 2018",
        siteUrl: "https://kennethrc2401.github.io/Jumpstart_v2/#",
        toolsUsed: '...'
    },
    {
        key: cyrb53("trackster"),
        imgSrc: determineImg("Trackster"),
        title: "Trackster",
        description: "...",
        dateCreated: "January 08, 2018",
        siteUrl: "https://kennethrc2401.github.io/Trackster/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("freshDeals"),
        imgSrc: determineImg("FreshDeals"),
        title: "Fresh Deals",
        description: "...",
        dateCreated: "December 27, 2017",
        siteUrl: "https://kennethrc2401.github.io/Fresh_Deals/index.html",
        toolsUsed: '...'
    },  
    {
        key: cyrb53("vacationWorld"),
        imgSrc: determineImg("VacationWorld"),
        title: "Vacation World",
        description: "...",
        dateCreated: "December 26, 2017",
        siteUrl: "https://kennethrc2401.github.io/Vacation_World/",
        toolsUsed: '...'
    },  
    {
        key: cyrb53("quinoaAndKaleSaladRecipe"),
        imgSrc: determineImg("QuinoaAndKaleSaladRecipe"),
        title: "Quinoa and Kale Salad Recipe",
        description: "...",
        dateCreated: "December 26, 2017",
        siteUrl: "https://kennethrc2401.github.io/Quinoa_and_Kale_Salad_Recipe/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("matchGame"),
        imgSrc: determineImg("MatchGame"),
        title: "Match Game",
        description: "...",
        dateCreated: "December 22, 2017",
        siteUrl: "https://kennethrc2401.github.io/Match-Game-Codecademy/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("colmarAcademyCapstoneProject"),
        imgSrc: determineImg("ColmarAcademyCapstoneProject"),
        title: "Colmar Academy - Capstone Project",
        description: "...",
        dateCreated: "Dec 12, 2017",
        siteUrl: "https://kennethrc2401.github.io/Colmar-Academy/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("fotomatic"),
        imgSrc: determineImg("Fotomatic"),
        title: "Fotomatic",
        description: "...",
        dateCreated: "December 09, 2017",
        siteUrl: "https://kennethrc2401.github.io/Fotomatic/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("tortoiseshellOptics"),
        imgSrc: determineImg("TortoiseshellOptics"),
        title: "Tortoiseshell Optics",
        description: "...",
        dateCreated: "December 09, 2017",
        siteUrl: "https://kennethrc2401.github.io/Tortoiseshell_Optics_v2/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("secretAgentSupply"),
        imgSrc: determineImg("SecretAgentSupply"),
        title: "Secret Agent Supply",
        description: "...",
        dateCreated: "December 07, 2017",
        siteUrl: "https://kennethrc2401.github.io/SecretAgentSupply/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("teaCozy"),
        imgSrc: determineImg("TeaCozy"),
        title: "Tea Cozy",
        description: "...",
        dateCreated: "December 02, 2017",
        siteUrl: "https://kennethrc2401.github.io/Tea_Cozy/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("broadwayDesign"),
        imgSrc: determineImg("BroadwayDesign"),
        title: "Broadway Design",
        description: "...",
        dateCreated: "November 27, 2017",
        siteUrl: "https://kennethrc2401.github.io/Broadway/",
        toolsUsed: '...'
    }
]