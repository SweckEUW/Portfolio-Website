const about = {
    description: 
    `
        As a tech-driven developer with a strong focus on computer graphics, I love bridging the gap between creative vision and technical execution. 

        Over the past five years, I have gained extensive hands-on experience in full-stack development for interactive 3D web applications (Vue.js, TypeScript, Babylon.js). Alongside my strong background in web development, I am also highly passionate about the film and animation industry. My current studies in Media Production (focusing on CGI for Film & TV) and my time studying Technical Directing at the Animationsinstitut have deeply fueled my enthusiasm for VFX and Pipeline Development.

        I am fascinated by building robust 3D pipelines and optimizing workflows to help artists push creative boundaries. Whether it involves data management, automation, or the integration of complex systems—I enjoy diving deep into the logic behind the scenes.

        My Core Focus & Interests:
        - Pipeline & VFX: Workflow optimization, Universal Scene Description (USD), ShotGrid, Python tooling
        - 3D / CGI: Autodesk Maya, Houdini, Blender
        - Web & Architecture: Interactive 3D applications, Fullstack development (Node.js, Vue.js), DevOps & Databases

        I already hold a B.Sc. in Media Informatics (Computer Visualistics and Design) and am currently completing my second degree in Media Production, with graduation expected in July 2026. I am always open to connecting over new technologies, creative challenges, and exciting projects.
    `,
    skills: {
        programming: [
            { name: "Frontend Web Development (HTML/CSS, Typescript, Tailwind, Primefaces)", bar: 100 },
            { name: "Vue", bar: 100 },
            { name: "Babylon.js (WebGL)", bar: 80 },
            // { name: "Python", bar: 60 },
            // { name: "QT/PySide", bar: 60 },
            // { name: "OpenGL (GLSL)", bar: 60 }
        ],
        software: [
            { name: "Autodesk Maya", bar: 80 },
            { name: "Blender", bar: 80 },
            { name: "Nuke", bar: 70 }
        ]
    },
    timelines: [
        {
            title: "Education",
            icon: "education.svg",
            points: [
                {
                    year: "09/2023 - 08/2026",
                    title: "Media Production B.A.",
                    place: "OWL University of Applied Sciences and Arts",
                    description: "Focus: CGI for Film & Television (Simulation, Pipeline Development & Virtual Production)"
                },
                {
                    year: "09/2022 - 03/2023",
                    title: "Technical Directing",
                    place: "Filmakademie Baden-Württemberg",
                    description: "Focus: Pipeline Development & Virtual Reality"
                },
                {
                    year: "09/2018 - 09/2022 ",
                    title: "Visual Computing and Design B.Sc.",
                    place: "Hamm-Lippstadt University of Applied Sciences",
                    description: "Focus: Computer Graphics & Web Development"
                }
            ]
        },
        {
            title: "Industry Experience",
            icon: "work.svg",
            points: [
                {
                    year: "09/2020 - Today",
                    title: "Working Student - Web Development",
                    place: "Raumtänzer GmbH",
                    description: "Development of custom 3D applications and tools for the web such as 3D product Viewers, Interactive Showrooms, 3D Configurators"
                },
                {
                    year: "11/2020 - 02/2022",
                    title: "Working Student - Web Development",
                    place: "Hamm-Lippstadt University of Applied Sciences",
                    description: "Conception and development of a website for the presentation of student work from the study course Visual Computing and Design"
                },
            ]
        }
    ]
};

export default about;
