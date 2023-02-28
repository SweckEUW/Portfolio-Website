const about = {
    description: 
        `Hello there,
        my name is Simon Weck and I'm a Computer Graphics enthusiast. One of the things that excites me most about computer graphics is the ability to create compelling and immersive experiences that can transport audiences to new worlds 🪐. I am constantly seeking out new creative challenges, and I enjoy working on projects that allow me to push the boundaries of what is possible.
        
        I have a Bachelor's degree in Computer Science and have gained experience in various software applications, such as Autodesk Maya, Adobe Photoshop, and After Effects. In addition, I am proficient in programming languages such as C#, JavaScript, and Python, and have experience with game engines such as Unity. I also have experience as a Web Developer, where I focused on developing 3D applications for the web. If you have any ideas for projects or are interested in collaborating, feel free to contact me 📞`
    ,
    skills: {
        programming: [
            { name: "Web Development (HTML, CSS, JavaScipt)", bar: 100 },
            { name: "Vue", bar: 80 },
            { name: "Babylon.js (WebGL)", bar: 80 },
            { name: "C# (Unity)", bar: 80 },
            { name: "Python", bar: 60 },
            { name: "QT/PySide", bar: 60 },
            { name: "OpenGL (GLSL)", bar: 60 }
        ],
        software: [
            { name: "Unity", bar: 80 },
            { name: "Autodesk Maya", bar: 80 },
            { name: "Adobe After Effects", bar: 60 },
            { name: "Blender", bar: 30 },
            { name: "Nuke", bar: 30 }
        ]
    },
    timelines: [
        {
            title: "Education",
            icon: "education.svg",
            points: [
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
                    year: "09/2020 - 03/2023",
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
