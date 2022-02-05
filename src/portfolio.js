/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Saurabh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Saurabh Prajapati Portfolio",
    type: "website",
    url: "https://thitainfo.com/",
  },
};

//Home Page
const greeting = {
  title: "Saurabh Prajapati",
  logo_name: "SaurabhPrajapati",
  nickname: "prajapati",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1vk1FLdNMRcXiakmvmkcHT7KEve-pVADuNYnu4eyxq5w/edit?usp=sharing",
  portfolio_repository: "https://github.com/saurabh-saurabh",
  githubProfile: "https://github.com/saurabh-saurabh",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/saurabh-saurabh",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prajapati-saurabh-08b41915b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC2pf13OlWdSH8sIVemwv-uQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:saurabhprajapati120@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/_Er_saurabh_",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/thita_info/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React | Angular",
        "⚡ Creating application backend in Spring Boot, Java & .Net",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "ML & Big Data",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Apache Hodoop and Solr",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/s_a_u_r_a_b_h_",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "#",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://leetcode.com/saurabhprajapati120/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@saurabhprajapati120",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/prajapatisaurabh",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Government Engineering College, Patan",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "GecPatan.jpg",
      alt_name: "GEC Patan",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://gecpatan.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Mastering Data Structure and Algorithm with Java ",
      subtitle: "- Hitech Choudhary",
      logo_path: "LCO_DS.png",
      certificate_link:
        "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/100524/certificates/103387/4832282_103387.pdf?1636601949",
      alt_name: "https://courses.learncodeonline.in/learn",
      color_code: "#8C151599",
    },
    {
      title: "Angular Developer Bootcamp",
      subtitle: "- Hitech Choudhary",
      logo_path: "LCO_ANGULAR.png",
      certificate_link:
        "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/63685/2436149_63685.pdf?1598118293",
      alt_name: "https://courses.learncodeonline.in/learn",
      color_code: "#00000099",
    },
    {
      title: "ReactJS developer Bootcamp",
      subtitle: "- Hitech Choudhary",
      logo_path: "LCO_React.png",
      certificate_link:
        "https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/2410/certificates/53635/2436149_53635.pdf?1623399475",
      alt_name: "https://courses.learncodeonline.in/learn",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "JR. Software Enginner",
          company: "Knovos India Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/knovos/mycompany/",
          logo_path: "knovos_india.jpg",
          duration: "April 2021 - Current",
          location: "Gandhinagar, Gujarat",
          description: "",
          color: "#fc1f20",
        },
        {
          title: "Java Trainee",
          company: "Knovos India Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/knovos/mycompany/",
          logo_path: "knovos_india.jpg",
          duration: "January 2021 - April 2021",
          location: "Gandhinagar, Gujarat",
          description:
            "During the internship time, we develop an eDiscovery - a document assessment system. In this system I was worked on one of the module analytics. Analytics - An automated all time running tracker to check any new loads for document analytics. Submit job on Hadoop cluster and give output back to document suite module for further processing. Using Hadoop Map/Reduce framework, perform some operations on text documents such as Personally Identifiable Information (PII) extraction, Key Phrase extraction, Language Detection, and Health and Process monitoring.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Java Intern",
          company: "HN Techno",
          company_url: "https://hntechno.com/",
          logo_path: "HnTechno.png",
          duration: "January 2019 - March 2020",
          location: "Ahmedabad, Gujarat",
          description:
            "Created a project named 'Garment Inventory Management System'. which makes the working procedure of present system of Garments easier and increases its efficiency to a high degree. The main objective of this application is to automate the existing system which is manually maintaining.We complete this project in 4 month having 2 people in the group",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://saurabhprajapati120.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Astha Homes, Nandej-Barejadi, T.A.-Daskroi, Dist.-Ahmedabad, Gujarat - 382435",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/HFVXEfuSLThQ8M648",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8140242047",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
