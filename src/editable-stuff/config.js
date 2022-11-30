// Navigation Bar SECTION
const navBar = {
    show: true,
};

// Main Body SECTION
const mainBody = {
    gradientColors: "#4484ce, #1ad7c0, #ff9b11, #ff7f7f, #67B26F, #4ca2cd",
    firstName: "Mochamad",
    middleName: "Nizwar",
    lastName: "Syafuan",
    message: " Passionate about mobile technology ",
    icons: [{
            image: "fa-github",
            url: "https://github.com/nizwar",
        },
        {
            image: "fa-facebook",
            url: "https://www.facebook.com/hangpuan",
        },
        {
            image: "fa-instagram",
            url: "https://www.instagram.com/nizwar_id/",
        },
        {
            image: "fa-linkedin",
            url: "https://www.linkedin.com/in/nizwar/",
        },
    ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
    show: true,
    heading: "About Me",
    imageLink: require("../editable-stuff/nizwar.png"),
    imageSize: 375,
    message: "My name is Nizwar. I'm a mobile developer enthusiast, graduated on 2020 as Associate Computer Expert. In my free time I like working on open source projects.",
    resume: "https://drive.google.com/file/d/1MrLJZlqN58R4f2BES54Of5ZmhYPsbeQu/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
    show: true,
    heading: "Popular Works",
    gitHubUsername: "nizwar", //i.e."johnDoe12Gh"
    reposLength: 0,
    specificRepos: [
        "ndialog",
        "openvpn_flutter",
        "jadwal_sholat",
        "nsms_gateway",
        "whitelistku",
        "screen_capture_event",
    ],
};

// Leadership SECTION
const leadership = {
    show: false,
    heading: "Leadership",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
    images: [{
            img: require("../editable-stuff/hashirshoaeb.png"),
            label: "First slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            img: require("../editable-stuff/hashirshoaeb.png"),
            label: "Second slide label",
            paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
    ],
    imageSize: {
        width: "615",
        height: "450"
    }
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: "Skills",
    hardSkills: [
        { name: "Flutter", value: 90 },
        { name: "Dart", value: 90 },
        { name: "Android Native (Java)", value: 65 },
        { name: "IOS Native (Swift)", value: 40 },
    ],
    softSkills: [
        { name: "Goal-Oriented", value: 80 },
        { name: "Collaboration", value: 90 },
        { name: "Positivity", value: 75 },
        { name: "Adaptability", value: 85 },
        { name: "Problem Solving", value: 85 },
        { name: "Empathy", value: 90 },
        { name: "Organization", value: 70 },
        { name: "Creativity", value: 90 },
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message: "I'm currently looking for Mobile Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "nizwar_id@gmail.com",
};

const experiences = {
    show: true,
    heading: "Experiences",
    data: [{
            role: 'Mobile Developer at Nettacode', // Here Add Company Name
            companylogo: require('../assets/img/nettacode.png'),
            date: 'June 2019 – Jan 2020',
        },
        {
            role: 'Mobile Developer at Armadius Team', // Here Add Company Name
            companylogo: require('../assets/img/armadius.png'),
            date: 'Sept 2019 – June 2021',
        },
        {
            role: 'Mobile Developer at Oxxo Team', // Here Add Company Name
            companylogo: require('../assets/img/oxxo.png'),
            date: 'Nov 2020 – Agust 2021',
        },
        {
            role: 'Mobile Developer at WBlue Team', // Here Add Company Name
            companylogo: require('../assets/img/wblue.png'),
            date: 'Jan 2021 – Nov 2022',
        },
    ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
