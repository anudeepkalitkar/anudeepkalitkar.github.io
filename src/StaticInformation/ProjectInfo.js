const ProjectsInfo = [
	{
		title: "Smart Traffic Control Sytem",
		coverImage: "Images/SmartTraffic.jpg",
		intro: "Utilizing edge detection techniques, our system captures and analyzes traffic density from CCTV footage, automating signal durations based on real-time vehicle count, reducing the need for manual intervention.",
        description: "Traffic congestion is a persistent challenge in major cities. Our innovative solution leverages edge detection to extract vital traffic data from CCTV footage. Instead of relying on manual traffic control, our system captures images from cameras stationed at junctions, transferring them to a database. These images are then processed to calculate traffic density. By setting a threshold for vehicle count, the system intelligently determines the duration of green and red lights at signals. This not only optimizes traffic flow but also significantly reduces the need for manual manpower, ensuring a more efficient and responsive traffic management system.",
		link: "",
		like: "SmartTrafficControlSytem"
	},
	{
		title: "Indoor Navigation",
		coverImage: "Images/Indoor.png",
		intro: "'In-House Navigation' is an intuitive app that guides mall-goers with visual paths to their desired stores/products, using advanced image processing and the Dijkstra algorithm for optimal route suggestions.",
		description: "Navigating large malls can be time-consuming and confusing. 'In-House Navigation' is our solution to this common problem. Mall owners can upload their mall's architecture, marking store and corridor nodes on a grid-viewed photo via the admin interface. On the other side, customers select their current location and desired destination in the mall. Our backend, powered by Python, processes the uploaded architecture, aligning store coordinates and determining corridor connections using image processing techniques. This results in a clear, black and white architectural image. To guide the user, the system employs the Dijkstra algorithm, renowned for finding the shortest paths. The result? A visual guide displayed to the customer, showing the quickest route to their chosen store or product, ensuring a seamless shopping experience.",
		link: "",
		like: "IndoorNav"
	},
	{
		title: "Maze The Game",
		coverImage: "Images/MazeTheGame.png",
		intro: "'Maze The Game' is a competitive multiplayer experience, challenging players to solve real-time generated mazes while interacting via an integrated chat window.",
		description: "Dive into the labyrinthine world of 'Maze The Game', a unique multiplayer platform where players are not just solving mazes, but competing in real-time. As players navigate the intricacies of each dynamically generated maze, they're racing against each other, with live scoreboards keeping the competition fierce. But it's not all about rivalry; we've integrated a chat window, fostering interaction and camaraderie among players. Whether you're strategizing, seeking hints, or just engaging in friendly banter, the chat feature adds an interactive dimension to the game. It's not just about reaching the end of the maze, but the journey and connections made along the way. Join the challenge, enjoy the camaraderie, and may the best maze-solver win!",
		link: "",
		like: "MazeGame",
	},

	{
		title: "Image Based Authentication System",
		coverImage: "Images/IBAS-Icons.jpg",
		intro: "The Image-based Authentication System replaces traditional passwords with a user-selected sequence of images, offering a more intuitive and memorable login experience using front-end web technologies and PHP.",
        description: "In today's digital age, remembering multiple passwords can be a hassle. The Image-based Authentication System offers a refreshing solution, allowing users to authenticate using a sequence of images. Instead of typing out complex passwords, users simply select a series of images from a grid, making the process more visual and memorable. Built using HTML, CSS, and JS for the front-end, and PHP for the back-end, this system is both robust and user-friendly. Traditional methods like email-password combinations, biometrics, and smart cards can be costly and less user-friendly. Our proposed system displays a mix of icons, mnemonic images, and Telugu alphabets in a grid format. The chosen sequence generates a unique hash value, securely stored in the database. Now, users can effortlessly log in using their personalized image sequence, merging security with simplicity.",
		link: "",
		like: "IBAS-Icons",
	},
	{
		title: "Doodle-Images Based Authentication System",
		coverImage: "Images/IBAS-Doodles.jpg",
		intro: "The Doodle-Images Based Authentication System allows users to authenticate by drawing and selecting their unique doodles, merging visual memory with security, using front-end web technologies and Python.",
        description: "The Doodle-Images Based Authentication System revolutionizes user authentication by replacing traditional text passwords with a more intuitive and visual approach. Users can draw up to five unique doodles or sketches on a canvas during registration. These doodles are then converted into images, making the authentication process more personalized and memorable. Developed with HTML, CSS, and JS for the front-end, and powered by Python on the back-end, this system ensures a seamless user experience. While traditional methods like email-password combinations, biometrics, and smart cards have their merits, they often come with cost and usability concerns. Our proposed system, on the other hand, presents users with a grid of images during login, which includes their previously drawn doodles mixed with other predetermined images. Users authenticate by selecting their original doodles from the grid, combining the power of visual memory with cutting-edge security.",
		link: "",
		like: "IBAS-Doodles",
	},
	{
		title: "Image Similarity Based Authentication System",
		coverImage: "Images/IBAS-IC.jpg",
		intro: "The Image Similarity Based Authentication System authenticates users by comparing drawn images to registration sketches, leveraging visual memory and OpenCV for enhanced security.",
        description: "The Image Similarity Based Authentication System offers a groundbreaking approach to user authentication. Instead of the age-old text passwords, users draw an image or doodle. This visual approach not only simplifies the authentication process but also taps into the innate human ability to remember visuals better than text. Built using HTML, CSS, and JS for the front-end, the system's backbone is Python, specifically the OpenCV module, which compares the drawn images for authentication. Traditional methods, such as email-password combinations or biometrics, often come with cost and usability challenges. Our system, however, provides users with a canvas during both registration and login. The doodles drawn are converted into images, encrypted, and securely stored on the server. For authentication, the system uses OpenCV to compare the login image with the registration image, requiring an 80% match to grant access. This innovative approach marries visual memory with cutting-edge technology for a secure and user-friendly experience.",
		link: "",
		like: "IBAS-Similarity",
	},
	{
		title: "A Framework for analysis of road Accidents",
		coverImage: "Images/Accident.jpg",
		intro: "Our framework analyzes road accident data using machine learning techniques, specifically Regression Analysis, to identify factors influencing accident severity, utilizing data from Kaggle and processing with pandas and NumPy.",
        description: "Road safety is paramount, and understanding the factors that influence accident severity can lead to better preventive measures. Our framework delves deep into road accident data using advanced machine learning techniques. While traditional systems, like the one presented by Sachin Kumar and Durga Toshniwal in 2015, utilized clustering and the Apriori algorithm for analysis, our approach is distinct. We source our data from Kaggle, a renowned platform for datasets. Leveraging the power of Python libraries, particularly pandas and NumPy, we preprocess and analyze this data. Our chosen method is Regression Analysis, a potent statistical tool that estimates relationships between variables. By applying this, we aim to pinpoint specific conditions or factors that, when combined, increase the likelihood or severity of an accident. The results are then visualized in graph form, providing clear insights into the intricate web of factors contributing to road accidents.",
		link: "",
		like: "AnalysisofRoadAccidents",
	},

	{
		title: "Licence Plate Detection",
		coverImage: "Images/License-Plate.png",
		intro: "Our Automatic Vehicle Number Plate Recognition (ANPR) system utilizes dash camera footage to detect and cross-reference license plates, aiding in vehicle identification for traffic-related applications.",
        description: "In today's bustling traffic environment, the Automatic Vehicle Number Plate Recognition (ANPR) system stands out as an essential tool for various applications. With the proliferation of dash cameras in vehicles, there's a continuous stream of traffic data available. This data is invaluable for identifying stolen vehicles, pinpointing vehicles involved in accidents, and more. Our proposed system begins by capturing a crisp, distortion-free image of the vehicle's number plate. Once captured, the Plate Extraction algorithm comes into play, isolating the license plate from the rest of the image. This cropped image then undergoes Optical Character Recognition (OCR), a powerful tool that identifies and translates the characters on the plate into text. Finally, the detected license number is cross-referenced with a comprehensive database of registered vehicles. This streamlined process ensures accurate, efficient, and rapid vehicle identification, making our ANPR system a game-changer in traffic-related applications.",
		link: "",
		like: "Licence-Plate-Detection",
	},

	// {
	// 	title: "Man-Machine Interface for SRD Chipset",
	// 	coverImage: "LMSgui.png",
	// 	intro: "Our project focuses on creating a GUI-based man-machine interface for an SDR chipset, enabling users to modify specific register bits and view the resulting outcomes of input combinations.",
    //     description: "The Man-Machine Interface for the SDR Chipset project is a pioneering initiative that seamlessly blends the complexities of Software Defined Radio (SDR) chipsets with user-friendly interactions. At its core, the project offers a Graphical User Interface (GUI) that empowers users to easily enable specific bits within designated registers, eliminating the need for intricate coding or manual adjustments. Additionally, the system provides an intuitive interface that displays the outcomes of various input combinations in the registers, offering immediate feedback for understanding and troubleshooting. This innovative approach not only democratizes access to SDR configurations but also streamlines development and testing processes, making it an invaluable tool for both novices and experts in the field.",
	// 	link: "",
	// 	like: "LMS6002D",
	// },
];

export { ProjectsInfo };
