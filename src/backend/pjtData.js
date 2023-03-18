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
      case 'SpanishHonorSocietyHHS': 
        return <img src={require('../pjtImgs/spanish_honor_society_hhs.png')} alt="Sanish Honor Society"/>
      case 'MothersDayCard2019': 
        return <img src={require('../pjtImgs/mothers_day_2019.png')} alt="Mothers Day 2019"/>
      case 'HappyEaster2019': 
        return <img src={require('../pjtImgs/HappyEaster2019.png')} alt="Happy Easter 2019"/>
      case 'HappyHalloween2018': 
        return <img src={require('../pjtImgs/HappyHalloween2018.png')} alt="Happy Halloween 2018"/>
      case 'HappyThanksgiving2018': 
        return <img src={require('../pjtImgs/HappyThanksgiving2018.png')} alt="Happy Thanksgiving 2018"/>
      case 'HappyHolidays201819':
        return <img src={require('../pjtImgs/HappyHolidays201819.png')} alt="Happy Holidays 2018-2019"/>
      case 'ReactTsShoppingCart':
        return <img src={require('../pjtImgs/ReactTsShoppingCart.png')} alt="React TypeScript Shopping Cart"/>
      case 'EcomvisionAdminDashboardMERN':
        return <img src={require('../pjtImgs/EcomvisionAdminDashboardMERN.png')} alt="Ecomvision Admin Dashboard (MERN)"/>
      case 'TechNotesMERN':
        return <img src={require('../pjtImgs/TechNotes.png')} alt="Tech Notes"/>
      case 'ToDoAppIBMWeek5':
        return <img src={require('../pjtImgs/IBM_ToDoListAppW5.png')} alt="To Do App IBM Week 5"/>
      default:  
        return <img src='' alt="null"/>
    }
  };

export const projectData = [
    {
        key: cyrb53("ecomvisionAdminDashboardMERN"),
        imgSrc: determineImg("EcomvisionAdminDashboardMERN"),
        title: "Ecomvision Admin Dashboard (MERN)",
        description: "...",
        dateCreated: "February 26, 2023",
        siteUrl: "https://github.com/Kennethrc2401/EcomvisionAdminDashboardMERN-Server",
        toolsUsed: 'MongoDB, Express, React, Node.js'
    },
    {
        key: cyrb53("reactTsShoppingCart"),
        imgSrc: determineImg("ReactTsShoppingCart"),
        title: "React TypeScript Shopping Cart",
        description: "...",
        dateCreated: "February 14, 2023",
        siteUrl: "https://react-ts-shopping-cart-jwiy.onrender.com/",
        toolsUsed: 'Vite, React, Typescript'
    },
    {
        key: cyrb53("techNotesMERN"),
        imgSrc: determineImg("TechNotesMERN"),
        title: "Tech Notes (MERN)",
        description: "...",
        dateCreated: "February 2, 2023",
        siteUrl: "https://github.com/Kennethrc2401/mern-stack-project1",
        toolsUsed: 'MongoDB, Express, React, Node.js'
    },
    {
        key: cyrb53("toDoAppIBMWeek5"),
        imgSrc: determineImg("ToDoAppIBMWeek5"),
        title: "To Do App (IBM Week 5)",
        description: "...",
        dateCreated: "January 31, 2023",
        siteUrl: "https://github.com/Kennethrc2401/toDoList-IBM-W5",
        toolsUsed: 'React, Node.js'
    },
    {
        key: cyrb53("mothersDayCard2019"),
        imgSrc: determineImg("MothersDayCard2019"),
        title: "Mother's Day 2019",
        description: "...",
        dateCreated: "May 11, 2019",
        siteUrl: "https://kennethrc2401.github.io/Mother-s-Day-2019/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("happyEaster2019"),
        imgSrc: determineImg("HappyEaster2019"),
        title: "Happy Easter 2019",
        description: "...",
        dateCreated: "April 20, 2019",
        siteUrl: "https://kennethrc2401.github.io/Happy-Easter-2019/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("spanishHonorSocietyHHS"),
        imgSrc: determineImg("SpanishHonorSocietyHHS"),
        title: "Spanish Honor Society - HHS",
        description: "...",
        dateCreated: "March 12, 2019",
        siteUrl: "https://kennethrc2401.github.io/Spanish-Honor-Society/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("happyHolidays201819"),
        imgSrc: determineImg("HappyHolidays201819"),
        title: "Happy Holidays 2018-2019!",
        description: "...",
        dateCreated: "November 29, 2018",
        siteUrl: "https://kennethrc2401.github.io/Happy-Holidays-2018-2019/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("happyThanksgiving2018"),
        imgSrc: determineImg("HappyThanksgiving2018"),
        title: "Happy Thanksgiving 2018!",
        description: "...",
        dateCreated: "November 19, 2018",
        siteUrl: "https://kennethrc2401.github.io/Thanksgiving-2018/",
        toolsUsed: '...'
    },
    {
        key: cyrb53("happyHalloween2018"),
        imgSrc: determineImg("HappyHalloween2018"),
        title: "Happy Halloween 2018!",
        description: "...",
        dateCreated: "October 26, 2018",
        siteUrl: "https://kennethrc2401.github.io/HappyHalloween2018/",
        toolsUsed: '...'
    },
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
        toolsUsed: 'Atom, HTML, CSS'
    }
]