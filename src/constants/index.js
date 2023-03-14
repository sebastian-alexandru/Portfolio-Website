import {
    angularweb,
    backend,
    fullstack,
    javaweb,
    ecenta,
    endava,
    inworks,
    premiumaerotec,
    siemens,
    ngmapapp,
    serverapp,
    footballapp,
    java,
    springboot,
    angular,
    graphql,
    kafka,
    kubernetes,
    nginx,
    postgres,
    docker,
    javascript,
    nodejs,
    reactjs,
    typescript
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Java Developer",
      icon: javaweb,
    },
    {
      title: "Angular Developer",
      icon: angularweb,
    },
    {
      title: "Web Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer",
      icon: fullstack,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Springboot",
      icon: springboot,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Postgresql",
      icon: postgres,
    },
    {
      name: "Graphql",
      icon: graphql,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "Nginx",
      icon: nginx,
    },
    {
      name: "Kafka",
      icon: kafka,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Siemens",
      icon: siemens,
      iconBg: "#00cea8",
      date: "November 2022 - Present",
      points: [
        "Development of software solutions based on Java and Angular",
        "Independently design components (frontend / backend) and implement this concept within the constraints of architectural and design guidelines",
        "Working closely with other team members and development teams",
        "Collaborating with cross-functional teams including Architects, Product Owners, Project Manager, Developers and Testers",
      ],
    },
    {
      title: "Endava Apprenticeship",
      company_name: "Endava",
      icon: endava,
      iconBg: "#fff",
      date: "September 2022 - October 2022",
      points: [
        "Learned the basics of ReactJS, .NET, MS SQL Server and MS Azure",
        "Developed a CRUD Application and deployed it in an Azure environment",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Ecenta",
      icon: ecenta,
      iconBg: "#fff",
      date: "February 2022 - October 2022",
      points: [
        "Working under Agile methodologies in an international team",
        "Working on the Front-end side of an e-commerce site for a client with a strong global presence",
        "Creating reusable components in Angular",
        "Working with APIs, handling requests and displaying the responses",
        "Development of new functionalities according to customer requests",
        "Following quality and security standards",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Inworks",
      icon: inworks,
      iconBg: "#fff",
      date: "September 2021 - February 2022",
      points: [
        "Web development using LAMP stack",
        "Database manipulation",
        "Creating and managing ERP modules (Soft1)",
      ],
    },
    {
      title: "IT Administrator",
      company_name: "Premium Aerotec",
      icon: premiumaerotec,
      iconBg: "#58a0ca",
      date: "March 2021 - September 2021",
      points: [
        "Service desk level 1",
        "Hardware maintenance",
        "Creating and solving tickets related to incidents and equipment requests",
        "Troubleshooting and tech support",
        "Configuration and installation of IT equipment",
        "Creating web interfaces (front-end) for internal applications",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Kafka Map App",
      description:
        "Application used for managing geospatial locations stored as GeoJSON objects",
      tags: [
        {
          name: "angular",
          color: "pink-text-gradient",
        },
        // {
        //   name: "maplibregl",
        //   color: "pink-text-gradient",
        // },
        {
          name: "graphql",
          color: "pink-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        // {
        //   name: "hibernate",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "kafka",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "postgis",
        //   color: "green-text-gradient",
        // },
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "kubernetes",
          color: "blue-text-gradient",
        },
      ],
      image: ngmapapp,
      source_code_link: "https://github.com/sebastian-alexandru/Kafka-Map-Streaming-App-Frontend",
    },
    {
      name: "Server Ping App",
      description:
        "CRUD application for managing servers and checking their availability by pinging them",
      tags: [
        {
          name: "angular",
          color: "pink-text-gradient",
        },
        {
          name: "rxjs",
          color: "pink-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "hibernate",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "blue-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "kubernetes",
          color: "blue-text-gradient",
        },
      ],
      image: serverapp,
      source_code_link: "https://github.com/sebastian-alexandru/Server-App-Frontend",
    },
    {
      name: "Football Player App",
      description:
        "CRUD web application using MERN stack for managing football players",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "mongoose",
          color: "pink-text-gradient",
        },
      ],
      image: footballapp,
      source_code_link: "https://github.com/sebastian-alexandru/Football-MERN-App-Frontend",
    },
  ];
  
  export { services, technologies, experiences, projects };
  