const projects = [

	{
		folder: "Emberpoint",
		headerImage: 'header.jpg',
		title: 'Emberpoint',
		category: 'Game',
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
			{ type: "Code", url: "" }
		]
	},


	{
		folder: "Monopoly Animation",
		headerImage: '1.jpg',
		title: 'Monopoly Animation',
		category: '3D Animation',
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
		title: 'Motile',
		category: 'Web Based 3D Configurator',
		description: `
			Motile is a modular smartphone concept. The idea is to have different modules like a cpu, memory or even a camera that can be replaced easily just like in a pc.
			We created a website with a configurator where users can create their custom phone configuration. 
			The configurator has a 3D viewer where the user can drag and drop the parts onto the phone. 
			The website also includes a basic user management system where users can register and manage their confiurations which get stored in a database
		`,
		roles: ["Frontend Web Developement", "Backend Web Developement", "Web 3D Programming"],
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
			{ type: "Code", url: "https://github.com/SweckEUW/Motile" }
		]
	},

	{
		folder: "Universe Simulation",
		headerImage: 'header.webp',
		title: 'Universe Simulation',
		category: 'Interactive 3D Visualization',
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
		features: [
			
		],
		contents: [
			{ type: "Code", url: "https://github.com/SweckEUW/Whacky-Contraptions" }
		]
	},


	{
		folder: "OpenFile",
		headerImage: 'header.webp',
		title: 'OpenFile App',
		category: 'App Concept',
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
		features: [

		]
	},


	{
		folder: "Revitalize",
		headerImage: 'header.webp',
		title: 'Revitalize Website',
		category: 'Corporate Design & Website',
		description: `
			We created this website for a Web Development and Corporate Design course. 
			We designed a complete corporate identity including a logo, a target group and a corporate philosophy. 
			Based on the corporate identity, we design the web pages starting with wireframes and went to create interactive prototypes in Adobe XD. 
			After the Design process was done, we programmed the website using plain HTML, CSS and JavaScript.
		`,
		roles: ["Frontend Web Developement", "Corporate Design", "Web Design", "UX Design"],
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
			{ type: "Code", url: "https://github.com/SweckEUW/Revitalize-Website" }
		]
	},

	{
		folder: "Brush Cleaner",
		headerImage: 'header.webp',
		title: 'Brush Cleaner',
		category: 'Product Concept',
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
		features: [
		]
	},


	{
		folder: "Arcade Automat",
		headerImage: 'header.webp',
		title: 'Arcade Automat',
		category: 'Game',
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
		features: [

		],
		contents: [
			{ type: "Code", url: "https://github.com/SweckEUW/Arcade-Automat" }
		]
	}
	
];

export default projects;
