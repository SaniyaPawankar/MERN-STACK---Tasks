import { techs } from "../Data/languageData.js";
// import { techModel } from "../models/techModel.js";

const apiIntro = async (req, res) => {
    res.status(200).json({
        message: "Welcome to our languages API",
        toDo: [
            {
                title: "You can get all the languages that are present in the dataSet",
                method: "GET",
                url: "http://localhost:5111/api/techs/all_languages",
                expectedResult: "[objects/null]"
            }
            ,
            {
                title: "You can get a random language that is present in our Dataset",
                method: "GET",
                url: "http://localhost:5111/api/techs/get_random_language",
                expectedResult: "[object]/null"
            },
            {
                title: "You can filter out languages baded on scope,difficuly and duration",
                method: "GET",
                url: "http://localhost:5111/api/techs/filter?scope=##&difficulty=##&duration=##",
                expectedResult: "object/[objects]/null",
                expectedFilter: [
                    {
                        scope: [
                            "Web Development", "Frontend", "Backend", "Full Stack", "Data Science", "AI", "Automation", "Android Development", "Enterprise Apps", "Embedded Systems", "OS Development", "Low-level Programming", "Game Development", "Competitive Programming", "System Software", "Desktop Apps", "Web Apps (.NET)", "CMS", "Cloud Services", "System Programming", "iOS Development", "Mobile Apps", "WebAssembly", "Blockchain", "Cross-Platform Apps", "Statistics", "Machine Learning", "Big Data", "Functional Programming", "Scripting", "Linux Admin", "DevOps", "Databases", "Data Analysis", "Web Design", "UI/UX", "SSR Apps", "APIs", "Database", "Cloud", "CI/CD", "Containers", "Infrastructure", "Deep Learning", "Computer Vision", "Robotics", "Data Visualization", "Analysis", "3D Modeling", "Game Design", "Animation", "Version Control", "Collaboration", "Automation", "Configuration Management", "Cloud Infrastructure", "System Administration", "Security", "Windows Admin", "Web3", "Finance", "Smart Contracts", "Blockchain Development", "Frontend Integration", "3D Web", "Graphics", "Animation", "Frontend ML", "Cross-Platform", "Build Tools", "Bundling", "Optimization", "Code Quality", "Code Formatting", "Testing", "Assertions", "Frontend Testing", "Automation", "Data Engineering", "Analytics", "BI", "Search Engines", "Data Indexing", "Caching", "Message Queues", "Microservices", "Web Servers", "Load Balancing", "Hosting", "Cybersecurity", "Penetration Testing", "Networking", "Security Analysis", "LLM Apps", "Chatbots"
                        ]
                    },
                    { difficulty: ["Easy", "Medium", "Hard"] },
                    { duration: [1, 2, 3, 4], in: "months" }
                ]
            },
            {
                title: "You can search for a language based on their ID's(id)",
                method: "GET",
                url: "http://localhost:5111/api/techs/:id/info",
                expectedResult: "object/null"
            }
        ]
    })
}

const getAllLanguages = (req, res) => {
    res.status(200).json({ message: `got all ${techs.length} languages for you !`, techs })
}

// const getAllLanguages = async (req, res) => {
//     try {
//         const allTechs = await techModel.find();
//         // console.log(allTechs);
//         res.status(200).json({ message: `Got All ${allTechs.length} languages`, techs: allTechs });
//     } catch (err) {
//         res.status(500).json({ message: "Error in getting languages", err });
//     }
// }

// const getRandomLanguage = (req, res) => {
//     let randomNo = Math.floor((Math.random() * 98) + 1);

//     let randomLang = techs.filter((tech, index) => {
//         return index === randomNo;
//     })

//     let [tech] = randomLang;

//     res.status(200).json({ message: "Here is a random language for you", language: tech });
// }


const getRandomLanguage = async (req, res) => {
    try {
        const techs = await techModel.find();
        const index = Math.floor(Math.random() * techs.length);
        const randomTech = techs[index];
        res.status(200).json({ message: "Random language selected successfully", tech: randomTech });
    } catch (err) {
        res.status(500).json({ message: "Error fetching random language", error: err.message });
    }
}


const getFilteredLanguages = async (req, res) => {
    try {
        let { scope, difficulty, duration } = req.query;
        let filteredString = "";


        if (scope) {
            filteredString += "/scope";
            const filteredTechs = await techModel.find({ scope: scope });
            if (filteredTechs.length === 0) {
                throw (`No data found for the filter applied as ${filteredString}: ${scope}`);
            }
            return res.status(200).json({ message: `Successfully fetched the data based on scope: ${scope}`, results: filteredTechs.length, languages: filteredTechs });
        }


        if (difficulty) {
            filteredString += "/difficulty";
            const filteredTechs = await techModel.find({ difficulty: difficulty });
            if (filteredTechs.length === 0) {
                throw (`No data found for the filter applied as ${filteredString}: ${difficulty}`);
            }
            return res.status(200).json({
                message: `Successfully fetched the data based on difficulty: ${difficulty}`,
                results: filteredTechs.length,
                languages: filteredTechs
            });
        }

        if (duration) {
            filteredString += "/duration";
            const durationInNo = Number(duration);
            const filteredTechs = await techModel.find({ duration: durationInNo });
            if (filteredTechs.length === 0) {
                throw (`No data found for the filter applied as ${filteredString}: ${durationInNo}`);
            }
            return res.status(200).json({
                message: `Successfully fetched the data based on duration: ${durationInNo}`, results: filteredTechs.length, languages: filteredTechs
            });
        }


        throw ("Please provide at least one valid filter (scope, difficulty, or duration");

    } catch (err) {
        console.log("error while filter: ", err);
        res.status(500).json({ message: "unable to get filter data", err: err });
    }
}


// const getLanguagesBasedOnId = async (req, res) => {
//     try {
//         let { id } = req.params;
//         if (!id) throw ("invalid/empty id.");
//         let result = techs.filter((tech) => { return tech.id == id });
//         if (result.length == 0) { res.status(200).json({ message: `language with ${id} id not found !`, result }) }
//         res.status(200).json({ message: `language with ${id} id found!`, result })
//     } catch (err) {
//         res.status(400).json({ message: "unable to get data", err });
//     }
// }

const getLanguagesBasedOnId = async (req, res) => {
    try {
        let { id } = req.params;
        if (!id) throw ("invalid/empty  id.");
        const langauge = await techModel.findById(id);
        if (!langauge) {
            res.status(404).json({ message: `Language with ID ${id} not found!` });
        }

        res.status(200).json({ message: `Language with ${id} found`, langauge: langauge });
    } catch (err) {
        res.status(400).json({ message: "Unable to get langauge data", err });
    }
}

// const postNewLanguage = (req, res) => {
//     try {
//         let { name, duration, difficulty, scope } = req.body;

//         if (!name || !duration || !difficulty || !scope) throw ("missing data to create a new language !")

//         techs.push({ id: techs.length + 1, name, duration, difficulty, scope })

//         res.staus(202).json({ message: `new langauge ${name} has been added successfully!` })

//     } catch (err) {
//         res.status(400).json({ message: "unable to add new language" });
//     }
// }

const postNewLanguage = async (req, res) => {
    try {
        let { name, duration, difficulty, scope } = req.body;

        if (!name || !duration || !difficulty || !scope) {
            throw ("Invalid Data");
        }

        const newLanguage = new techModel({ name, duration, difficulty, scope });

        await newLanguage.save();

        res.status(200).json({ message: `New language ${name} has been added successfully`, language: newLanguage });
    } catch (err) {
        console.log("Error adding new language:", err);
        res.status(400).json({ message: "Unable to add new language", err });
    }
}



export { apiIntro, getRandomLanguage, getFilteredLanguages, getAllLanguages, getLanguagesBasedOnId, postNewLanguage };