import { Icons } from "@/components/icons";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { HomeIcon, BriefcaseBusiness } from "lucide-react";

export const DATA = {
  skills: [
    "HTML",
    "CSS",
    "JS",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "PHP",
    "CI4",
    "Laravel",
    "MongoDB",
    "Firebase",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "#", icon: HomeIcon, label: "Home" },
    {
      href: "https://webhooksstudio.vercel.app/",
      icon: BriefcaseBusiness,
      label: "Business",
    },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/charanraj-kulal",
        icon: Icons.github,

        navbar: true,
      },
      Certificate: {
        name: "Certificates",
        url: "https://drive.google.com/drive/folders/16sq2qXg-GDsnHyceA7i4ppQFlb2E3VKz",
        icon: Icons.certificate,

        navbar: true,
      },
      Linkedin: {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/charan-raj-65862a22a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: InstagramLogoIcon,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:charanraj9731@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  Internships: [
    {
      company: "Biz Technosys Infotech",
      href: "https://biztechnosys.com/",
      badges: ["CRM"],
      location: "JP Nagar, Bangalore",
      title: "Full-Stack Developer",
      logoUrl:
        "data:image/webp;base64,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",
      start: "Jun 2024",
      end: "Aug 2024",
      description: `I was a full-stack developer, working on CRM-based technology like Vtiger, Frappe, and now with Moodle.`,
    },
    {
      company: "Bridge-IT Technologies",
      badges: [],
      href: "#",
      location: "Mangalore",
      title: "Back-end Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQHwRlX9fuVADw/company-logo_200_200/company-logo_200_200/0/1674093382530/bridgeitarmenia_logo?e=1733961600&v=beta&t=OBIhB_9I59B3o9XwINmqNafRwBW_irvZa8hdFjV1b4M",
      start: "Nov 2023",
      end: "Feb 2024",
      description: `Worked with Rest API by using AJAX for Civil Project with Framework CodeIgniter4
and completed modules.`,
    },
    {
      company: "PHN Technology Pvt Ltd",
      href: "https://phntechnology.com/",
      badges: [],
      location: "Remote [Pune]",
      title: "Web Developer",
      logoUrl:
        "https://media.licdn.com/dms/image/v2/D560BAQHjzKoDm9aq7w/company-logo_200_200/company-logo_200_200/0/1724738277622?e=1733961600&v=beta&t=jsNtBtA-udWghmvpPN-iG632KmBSPOAAxGCfVq9Fdl0",
      start: "Mar 2023",
      end: "May 2023",
      description: `Learned and worked on a task for the live project.
Contributed to complete the project modules using JQuery, HTML and CSS.`,
    },
    {
      company: "Isarva Infotech Private Limited",
      href: "https://isarvait.com/",
      badges: [],
      location: "Mangaluru, Karnataka",
      title: "Back-end Developer",
      logoUrl: "https://isarvait.com/wp-content/uploads/2021/12/i-sarva-it.png",
      start: "Jun 2022",
      end: "Sep 2022",
      description: `Front-end developer for live projects using Bootstrap and CSS.
Also contributed my knowledge of PHP frameworks.`,
    },
  ],
  education: [
    {
      school: "MDMRS, Macchina, Belthangady",
      href: "https://schools.org.in/dakshina-kannada/29240203908/morarji-desai-residential-school-machina.html",
      degree: "6th -10th",
      logoUrl:
        "data:image/webp;base64,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",
      start: "2012",
      end: "2017",
    },
    {
      school: "SVS PU College bantwal",
      href: "http://svscbantwal.com/",
      degree: "12th",
      logoUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADYAOAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAABAUCAwcGAf/EAC8QAAIBAwQABAQFBQAAAAAAAAECAwAEEQUSITFBUWFxBhMiMhQVgaHBIyRSkbH/xAAZAQACAwEAAAAAAAAAAAAAAAAAAgEDBAX/xAAfEQACAgICAwEAAAAAAAAAAAAAAQIRA0ExURIhwSL/2gAMAwEAAhEDEQA/AO41quLiK1haa4kWONcZZjwMnH81lNKkETyysFjRSzMfACoMFs+tX/42eT+yiykUatxKDg5IxkeAIz2vQxzKXYDMGp3V/PttLV0t8OryvgFTxtZewwzkcZ6/Q6fyvV5V3Tar8tim0rGpwDggkcjnGD75NfdT1dhfRaTpJQ3jk7iRxEoHZpW8s9bikiH57CN7Y+sCMj273e3FI81P8odY+3Q/Bba1Fcs0l5DJE7j6dnCjBz6+WOaas9ThuXEZHy5GJ2qTkkc9+R4PB54PlUy4n1LRFS4vboXlpuCyn5YUpnjIxTtxDBqdvDf2RWRwBJCxJCyAZwD6c9+vkSDMZqTpqmQ417KlFI6Zem5EkbpIHiO0u6hfmHokAHzyKKngUX+IZmEMVpFI0cty21WRiGGPLHfJGc4GM8iqVvDHbwRwwqEjjUKqjwAqXqe861py4kMJJLjaxQEfaSegc9e9WKZ8IDzU6QaZ8R3GoT3DCIxbnUr0CDznx+zrHlUfXtY0m7urGS5YB5gf6cpG6NRKigD1YsDjk8elOfHiLsDbNxZVVuCcACTnjyyTmvKPYwRjdLFEwI3xsy5Jxx/wfuK57yKPlF8WbMcHKpWe61C+tr3T7myWZ1kh2kvwxZVP3Ajg5xVfSrYWmnW8AYttQcmuaaNGouoFZGLNA4III+WPrA46HHHNdUQYUAeAq3FJzyOT6X0qyx8EokyWymXXEurfZsZR8wOD7HBHXGODkHHhySVq+JyUhtZN7qonCviYRjB8Sx4HIHfnjs0Vsq1ZQbdctt7Wt0GiQwSgl5WcKBkeCsMngYBzyapxusiK6HKsMg1jcwrcW8kDkhZFKnB5wRSWjWlxY27QTSAxIcQrnJVR1k/x4e3AXQHmvjqZWkMTE7FCjgZJO1yR7YIqDYPDc2cLsfvUFw2eRjrsY/bknqs9fk1a8+Ib1YLSa5t0dhGywkgkLgAHrPlSlppl+sBa6JgkJYpGFjzGcMc8nvon1HrXNyQk7dbOhDxikr0M2U6PrLpGNjKpRQo+jJVj74yfX9K6fA/zIEf/ACUGuSQJrFo8gaylaUS7kZIw5YE8kbScHz966boEss2jW5lBWfYdyyKQVOTjI7q7BGUcntcr6Z8tON3sX1WWO51WzsETdOjCbcVUhBnk53BlONwBGR3nNFM6ZprWk1xPPOZ55myXIAA4A4HhwFB552iitrekZyjWEib1xx2DyM0UUoE6PQ7Rbv8AFMu6bduDAYwc5redJsDndbRndknI7zzRRQBhLothKG3QKN2c49e6zsNPWzjSNX3KhJGRz/uiigB2iiigD//Z",
      start: "2018",
      end: "2019",
    },
    {
      school: "GFGC Carstreet, Mangalore",
      href: "https://dce.karnataka.gov.in/page/Colleges/Government+First+Grade+Colleges/en",
      degree: "Bachelor's Degree of Computer Applications (BCA)",
      logoUrl:
        "data:image/webp;base64,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",
      start: "2020",
      end: "2022",
    },
    {
      school: "St. Agnes College (Autonomous), Mangaluru",
      href: "https://www.stagnescollege.edu.in/",
      degree: "Master's Degree of Computer Applications (MCA)",
      logoUrl:
        "data:image/jpeg;base64,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",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Study-Sphere",
      href: "https://study-sphere-frontend.vercel.app/",
      dates: "Jun 2024 - Present",
      active: true,
      description:
        "Study-Sphere is an innovative online learning platform designed to enhance the educational experience for students of all ages. It offers a diverse range of interactive courses across various subjects, facilitated by experienced instructors. Students can engage in live classes, participate in discussions, and access a rich library of resources to supplement their learning. Study-Sphere aims to create a collaborative and inclusive environment where learners can thrive and achieve their academic goals. With features like personalized learning paths, progress tracking, and peer-to-peer support, Study-Sphere ensures a comprehensive and engaging educational journey.",
      technologies: [
        "React.js",
        "Express.js",
        "Javacript",
        "Firebase",
        "Material UI",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://study-sphere-frontend.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charanraj-kulal/study-sphere-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://ik.imagekit.io/charanraj/UI/Screenshot_18.png?updatedAt=1725720063363",
      video: "",
    },
    {
      title: "Agnisia",
      href: "#",
      dates: "Nov 2023 - Mar 2024",
      active: true,
      description:
        "AGNISIA is a comprehensive IT Fest Management System designed to streamline the organization and management of IT festivals. It offers features for event registration, scheduling, participant management, and real-time updates, ensuring a seamless and engaging experience for both organizers and attendees.",
      technologies: [
        "PHP",
        "CI4",
        "SQL",
        "JQery",
        "AJAX",
        "Bootstrap5",
        "CSS",
        "JSON",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charanraj-kulal/Agno-fest-fullstack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://ik.imagekit.io/charanraj/UI/image%20(6).png?updatedAt=1725711622247",
      video: "",
    },
    {
      title: "LMS",
      href: "#",
      dates: "June 2022 - September 2022",
      active: true,
      description:
        "LMS-Leave Management System is a comprehensive application designed to streamline and automate the process of managing employee leave requests within a company. This system offers a user-friendly interface for employees to submit leave requests, track their leave balances, and view leave history. It also provides managers with tools to review, approve, or reject leave requests efficiently, ensuring that the organization can maintain optimal staffing levels. The LMS includes features such as customizable leave policies, automated notifications, and detailed reporting capabilities, making it an essential tool for improving productivity and ensuring compliance with company leave policies.",
      technologies: [
        "PHP",
        "CI4",
        "SQL",
        "JQery",
        "AJAX",
        "Bootstrap5",
        "CSS",
        "JSON",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/charanraj-kulal/Leave_management_system",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://ik.imagekit.io/charanraj/UI/image.png?updatedAt=1725711628004",
      video: "",
    },
    {
      title: "Webhooks Studio",
      href: "https://webhooksstudio.vercel.app/",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "Developed for Commercial purpose to market and communicate between clients and developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "EmailJS",

        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://webhooksstudio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/charanraj-kulal/webhooksstudio-fullstack",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://ik.imagekit.io/charanraj/UI/image%20(1).png?updatedAt=1725711619836",
      video: "",
    },
  ],
} as const;
