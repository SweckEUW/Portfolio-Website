const projects = [
	
	{
		folder: "Mission Meltdown",
		headerImage: 'header.jpg',
		title: 'Mission Meltdown',
		category: '3D Animation',
		categories: ["Animation"],
		description: `
			In a world getting too warm, the determined penguin Piku hauls his chair up a colder nearby mountain. What follows is a chaotic, slapstick-filled journey full of falls, frustration, and frozen perseverance.
		`,
		roles: ["Director", "Pipeline TD", "Character Animator"],
		types: ["University Project"],
		created: "January 2025 - April 2025 (4 Months)",
		tools: ["Blender", "Autodesk Maya", "Houdini"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		noTrailer: true,
	},

	{
		folder: "Seacarus",
		headerImage: 'header.jpg',
		title: 'Seacarus',
		category: '3D Animation',
		categories: ["Animation"],
		description: `
			The 3D animated short film SEACARUS directed by Jan Brakhage tells the humorous story of a fisherman who encounters a clever octopus on the high seas. 
			Through a series of unexpected events, an exciting struggle over a fish unfolds, ultimately leading to an unusual collaboration.
			Based on Autodesk Flow Production Tracking I established a production pipeline for the project. Furthermore I did cloth and water simulations in Houdini.
		`,
		roles: ["Pipeline TD", "Effects Artist"],
		types: ["University Project"],
		created: "October 2024 - January 2025 (4 Months)",
		tools: ["Autodesk Flow Production Tracking", "Houdini",  "Autodesk Maya", "Blender"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		noTrailer: true,
	},

	{
		folder: "Oriono",
		headerImage: 'header.jpg',
		title: 'Oriono',
		category: '3D Animation',
		categories: ["Animation"],
		description: `
			Oriono is a 7 minute 3D animated short film about Armin Nielsen, who lands on the distant planet Uraban 5. 
			During his exploration, he experiences both triumphant and life-threatening moments, captured by a documenting drone, revealing the challenges and hopes of his unique journey. 
			On this project I worked as Pipeline TD and did some character animation. 
			I established workflows using the Prism Pipeline in combination with Autodesk Flow Production Tracking which helped us get 51 Shots done in about 2 Months. 
		`,
		roles: ["Pipeline TD", "Character Animator"],
		types: ["University Project"],
		created: "October 2023 - January 2024 (4 Months)",
		tools: ["Autodesk Flow Production Tracking", "Prism Pipeline", "Autodesk Maya", "Blender"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		noTrailer: true,
	},

	{
		folder: "BiPo Open",
		headerImage: 'header.jpg',
		title: 'Weck BiPo Open Website',
		category: 'Website',
		categories: ["Web"],
		description: `
			Every year I host a Beer Pong Tournament called "Weck BiPo Open". 
			This year I decided to create a website to manage the tournament and display additional information.
			This Website has a backend to manage tournaments (create teams and groups, set game results etc.).
		`,
		roles: ["Frontend Web Developement", "Backend Developement", "Web Design"],
		types: ["Personal Project"],
		created: "April 2023 - June 2023 (3 Months)",
		tools: ["Vue", "Node.js", "mongoDB"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		noTrailer: true,
		contents: [
			{ type: "Website", url: "https://bipoopen.de/" },
			{ type: "Code", url: "https://github.com/SweckEUW/BiPoOpen-Website" }
		]
	},

	{
		folder: "City of Light",
		headerImage: 'header.webp',
		title: 'The City of Light',
		category: 'Web Based 3D Showroom',
		categories: ["3D","Web"],
		description: `
			The City of Light is a Web Based 3D Showroom for the client eku Kabel & Systeme GmbH & Co. KG.
			The Showroom is used to display their communication technology. 
			I did all the frontend and 3D development in this project.
		`,
		roles: ["Frontend Web Developement", "Web 3D Programming"],
		types: ["Project at Raumtänzer GmbH"],
		created: "January 2022 - June 2022 (5 Months)",
		tools: ["Vue", "Babylon.js"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		noTrailer: true,
		contents: [
			{ type: "Website", url: "https://eku-kabel.flux-cms.de/" }
		]
	},

	{
		folder: "Aliaxis",
		headerImage: '1.jpg',
		title: 'Aliaxis Showroom',
		category: 'Web Based 3D Showroom',
		categories: ["3D","Web"],
		description: `
			This is a Web Based 3D Shorwoom for the client Aliaxis Deutschland GmbH.
			Aliaxis develops and sells plastic pipe systems and showcases this in this interactive 3D World.
			The user can select pipes and products to get more information.
		`,
		roles: ["Frontend Web Developement", "Web 3D Programming"],
		types: ["Project at Raumtänzer GmbH"],
		created: "January 2022 - June 2022 (5 Months)",
		tools: ["Vue", "Babylon.js"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		noTrailer: true,
		contents: [
			{ type: "Website", url: "https://www.aliaxis.de/de/showroom" }
		]
	},

	{
		folder: "Emberpoint",
		headerImage: 'header.jpg',
		title: 'Emberpoint',
		category: 'Game',
		categories: ["3D"],
		description: `
			Emberpoint is a 3D survival game with base building elements from a top-down perspective. 
			The player has to craft and fight his way out of a firezone to find crystals in hidden temples. 
			We created the gameplay concept and story as a team and later developed the game using the Unity engine.
		`,
		roles: ["Gameplay Programming", "Level Design", "Environment Design"],
		types: ["University Project", "Group Project (5 Members)"],
		created: "March 2021 - June 2021 (3 Months)",
		tools: ["Unity", "C-Sharp"],
		headerImages: ["2.jpg","Logo.png","3.jpg"],
		trailerTitle: "Watch Gameplay",
		features: [
			{ 
				media: 'videos/Feature.webm', 
				description: `
					I developed the firezone which will be dynamically extendet by the player with so called shield generators. 
					These are placeable objects that generate a shield in a radius arround them and protect the player from the deadly firezone.
					I used Unitys Shader Graph to develop a shader for the firezone that fits the artstyle of the game but also represents a threatening dynamic firezone. 
				`
			}
		],
		contents: [
			{ type: "Code", url: "https://github.com/SweckEUW/Emberpoint" }
		]
	},

	{
		folder: "Monopoly Animation",
		headerImage: '1.jpg',
		title: 'Monopoly Animation',
		category: '3D Animation',
		categories: ["3D"],
		description: `
			In this Animation I integrated computer generated content into live action footage.
			I modelled, shaded, animated and lighted everything in Maya. Rendering was done using Arnold. 
			The different render layers then got composited in After Effects and effects like depth of field or motion blur were added 
			to integrate the cgi elements as seamlessly as possible. 
		`,
		roles: ["3D Modelling", "3D Animation", "Compositing"],
		types: ["University Project", "Individual Project"],
		created: "July 2021",
		tools: ["Autodesk Maya", "Adobe After Effects"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		trailerTitle: "Watch the Breakdown",
		features: [
			{ 
				media: 'pictures/4.jpg', 
				description: `
					To make the cgi assets in the clip more belivable I focused on realistic shading. 
					I looked at real monopoly figures and tried to mimic the used look by adding scratches and rust to the assets. 
				`
			}
		]
	},

	{
		folder: "AI Image Editor Toolkit",
		headerImage: '2.jpg',
		title: 'AI Image Editor Toolkit',
		category: 'Autodesk Maya Plugin',
		categories: [],
		description: `
			This is a Autodesk Maya plug-in that uses artificial intelligence powered image editing algorithms for fast look development. 
			The algorithms works on rendered images directly inside the render view of Maya. 
			Open source implimentations of the algorithms neural style transfer, ai super resolution and deep dream are used.
		`,
		roles: ["UI Programming"],
		types: ["University Project", "Individual Project"],
		created: "May 2022 - August 2022 (4 Months)",
		tools: ["Autodesk Maya", "Python", "PyQt"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		trailerTitle: "Watch the Walkthrough",
		features: [
			{ 
				media: 'pictures/2.jpg', 
				description: `
					Neural style transfer is a powerful tool that can be used to transfer a style from one image to another.
					E.g the expressionistic style of a Vincent van Gogh painting can be transfered to a rendered image. 
					But to work with this algorithm extra software has to be installed and rendered images from Maya need to be exported and than imported to that software. 
					To make this process faster I integrated the algorithm directly into Maya so users can try out different styles with the click of a button. 
				`
			}
		],
		contents: [
			{ type: "Code", url: "https://github.com/SweckEUW/Autodesk-Maya-AI-Image-Edit-Toolkit" }
		]
	},


	{
		folder: "Motile",
		headerImage: 'header.webp',
		title: 'Motile Website',
		category: 'Web Based 3D Configurator',
		categories: ["3D","Web"],
		description: `
			Motile is a modular smartphone concept. The idea is to have different modules like a cpu, memory or even a camera that can be replaced easily just like in a pc.
			We created a website with a configurator where users can create their custom phone configuration. 
			The configurator has a 3D viewer where the user can drag and drop the parts onto the phone. 
			The website also includes a basic user management system where users can register and manage their confiurations which get stored in a database
		`,
		roles: ["Frontend Web Developement", "Backend Developement", "Web 3D Programming"],
		types: ["University Project", "Group Project (4 Members)"],
		created: "September 20021 - February 2022 (6 Months)",
		tools: ["React", "Babylon.js", "Node.js", "mongoDB", "Python", "Blender"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		features: [
			{ 
				media: 'pictures/feature.png', 
				description: `
					For each configuration the user creates we generate a thumbnail. 
					To also make high quality previews of the products users create we wanted to make automated photorealistic renderings.
					To make this possible I wrote a Blender script which recreates the phone configuration inside blender and generates a raytraced rendering.
					This all works fully autmated on the serverside and stores the rendering inside a database. 
				`
			}
		],
		contents: [
			{ type: "Website", url: "https://sweckeuw.github.io/Motile-Website" },
			{ type: "Code", url: "https://github.com/SweckEUW/Motile-Website" }
		]
	},

	{
		folder: "CVDesign",
		headerImage: '1.jpg',
		title: 'CVDesign Website',
		category: 'Website',
		categories: ["Web"],
		description: `
			I worked from September 2020 until February 2022 at the University of Applied Sciences Hamm-Lippstadt as a working student to develop a page to present student projects of the
			study course Visual Computing and Design. CVDesign is the result of this work. 
			We started to design the website and made prototypes in Adobe XD.
			After the Design process was done, we programmed the website using vue.
			We also used a self hosted Headless CMS to manage the projects that are displayed on the site.
		`,
		roles: ["Frontend Web Developement", "Web Design"],
		types: ["Project at Hochschule Hamm-Lippstadt", "Group Project (3 Members)"],
		created: "September 2020 - February 2022 (16 Months)",
		tools: ["Vue", "Adobe XD"],
		headerImages: ["1.jpg","2.jpg","3.jpg"],
		noTrailer: true,
		contents: [
			{ type: "Website", url: "https://cvdesign.hshl.de/" }
		]
	},

	{
		folder: "Universe Simulation",
		headerImage: 'header.webp',
		title: 'Universe Simulation',
		category: 'Interactive 3D Visualization',
		categories: ["3D"],
		description: `
			We created this application for a Computer Graphics and Image Processing course. 
			You can create your own universe by scanning an image. Simply draw an image by hand and scan the image with the application to create a proceduraly generated 3D universe. 
			By drawing collored shapes and connections, the user can define various attributes like planet types, distance between planets and planet sizes. 
			All planets are procedural generated by using noise functions and therefore never look the same. After the generation process is done, the user can explore the universe in 3D.
		`,
		roles: ["Graphics Programming", "UI Programming"],
		types: ["University Project", "Group Project (4 Members)"],
		created: "August 2019 - January 2020 (6 Months)",
		tools: ["Java", "OpenCV", "OpenGL"],
		headerImages: ["1.webp","2.webp","3.webp"],
		features: [
			{ 
				media: 'videos/6.webm', 
				description: `
					I also wrote a small tool where the user can create a custom earthlike planet by editing noise settings. 
					The generated planets can be exported as obj files with a custom written exporter.
				`
			},
		],
		contents: [
			{ type: "Code", url: "https://github.com/SweckEUW/Universe-Simulation" }
		]
	},


	{
		folder: "Whacky Contraptions",
		headerImage: 'header.webp',
		title: 'Whacky Contraptions',
		category: 'Physics Simulation Game',
		categories: ["3D"],
		description: `
			"Whacky Contraptions" is the name of the game we create for a simulation course at my university.
			We create a 2D physics engine that includes algorithms for physically correct collision handling.
			Goal of the game is to transport a ball into a bucket, the user has multiple objects at hand to achieve this. 
			Objects can be freely placed into the scene and when the simulation is running the moveable objects collide physically correctly with the other objects.
		`,
		roles: ["Simulation Programming", "Graphics Programming", "UI Programming"],
		types: ["University Project", "Group Project (4 Members)"],
		created: "March 2020 - June 2020 (4 Months)",
		tools: ["Java", "JavaFX", "OpenGL"],
		headerImages: ["1.webp","2.webp","3.webp"],
		contents: [
			{ type: "Code", url: "https://github.com/SweckEUW/Whacky-Contraptions" }
		]
	},


	{
		folder: "OpenFile",
		headerImage: 'header.webp',
		title: 'OpenFile App',
		category: 'App Concept',
		categories: [],
		description: `
			"Open File" is the name for our file hosting app, which we created for a User Experience Design course. 
			The task was to create a Natural User Interface which transmits trust and safety. 
			We specifically used heuristics, colors and icons to convey trust and safety. 
			After the design process was done, we created smooth and modern Animations in After Effects to bring the application to life
		`,
		roles: ["UI Design", "UX Design", "Animation Design"],
		types: ["University Project", "Group Project (2 Members)"],
		created: "April 2020 - June 2020 (3 Months)",
		tools: ["Adobe XD", "Adobe Illustrator", "Adobe After Effects"],
		headerImages: ["1.webp","2.webp","3.webp"],
		features: []
	},


	{
		folder: "Revitalize",
		headerImage: 'header.webp',
		title: 'Revitalize Website',
		category: 'Corporate Design & Website',
		categories: ["Web"],
		description: `
			We created this website for a Web Development and Corporate Design course. 
			We designed a complete corporate identity including a logo, a target group and a corporate philosophy. 
			Based on the corporate identity, we design the web pages starting with wireframes and went to create interactive prototypes in Adobe XD. 
			After the Design process was done, we programmed the website using plain HTML, CSS and JavaScript.
		`,
		roles: ["Frontend Web Developement", "Corporate Design", "Web Design"],
		types: ["University Project", "Group Project (3 Members)"],
		created: "September 2019 - January 2020 (5 Months)",
		tools: ["Adobe XD", "Adobe Illustrator", "HTML", "CSS", "JavaScript"],
		noTrailer: true,
		headerImages: ["1.webp","2.webp","3.webp"],
		features: [
			{ 
				media: 'pictures/feature 1.webp', 
				description: `
					Our company is selling natural supplements for athlete and I created a logo for the company. The logo should represent strength but also nature. 
					To make the shape harmonic I used circles with the size of the fibonacci sequence.
				`
			}
		],
		contents: [
			{ type: "Website", url: "https://sweckeuw.github.io/Revitalize-Website/" },
			{ type: "Code", url: "https://github.com/SweckEUW/Revitalize-Website" },
		]
	},

	{
		folder: "Brush Cleaner",
		headerImage: 'header.webp',
		title: 'Brush Cleaner',
		category: 'Product Concept',
		categories: ["3D"],
		description: `
			This is a product concept for a Computer-Aided Design course. 
			It's a cleaning tool for makeup brushes, which is a 2 part set that can be put together to save space in the bathroom. 
			The bottle at the bottom holds a cleaning liquid, and The bottle at the top has little nubs inside for the user to rub the brushes against. 
			The top bottle can also be used as a brush holder when the set is put together.
		`,
		roles: ["3D Modeling", "Industrial Design"],
		types: ["University Project", "Individual Project"],
		created: "May 2019 - June 2019 (2 Months) ",
		tools: ["SolidWorks"],
		noTrailer: true,
		headerImages: ["1.webp","feature.webp","3.webp"],
		features: []
	},


	{
		folder: "Arcade Automat",
		headerImage: 'header.webp',
		title: 'Arcade Automat',
		category: 'Game',
		categories: [],
		description: `
			This Application was created for a Data Structures & Algorithms course, where we implemented algorithms, which were taught at the Lecture.
			We decided to make the classic arcade Automate games Pac-Man and Snake. 
			We used Merge- and Heap-Sort to sort high score table, the A* search algorithm for the Ghosts in Pac-Man and a binary search algorithm to search for Names inside the high score table.
		`,
		roles: ["Gameplay Programming", "UI Programming"],
		types: ["University Project", "Group Project (2 Members)"],
		created: "April 2019 - July 2019 (4 Months)",
		tools: ["Java","JavaFX"],
		headerImages: ["1.webp","2.webp","3.webp"],
		contents: [
			{ type: "Code", url: "https://github.com/SweckEUW/Arcade-Automat" }
		]
	}
	
];

export default projects;
