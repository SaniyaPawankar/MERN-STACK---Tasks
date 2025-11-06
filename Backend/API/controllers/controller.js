import { techs } from "../Data/languageData.js";

const apiIntro = async (req, res) => {
    res.status(200).json({
        message: "Welcome to our languages API",
        toDo: [
            {
                title: "You can get all the languages that are present in the dataSet",
                method: "GET",
                url: "http://localhost:5111/api/techs/all_languages",
                expectedResult: "[objects/null"
            }
            ,
            {
                title: "You can get a random language that is present in our Dataset",
                method: "GET",
                url: "http://localhost:5111/api/techs/get_random_language",
                expectedResult: "[objects]/null"
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

// const getAllLanguages = (req, res) => {
//     res.status(200).json({ message: `got all ${techs.length} languages for you !`, techs })
// }

const getAllLanguages = async(req,res) => {
    try{
        const allTechs = await techModel.find();
        res.status(200).json({ message: `Got All ${allTechs.lnegth} languages`, techs: allTechs });
    }catch(err){
        res.status(500).json({message: "Error in getting languages", err});
    }
}

// const getRandomLanguage = (req, res) => {
//     let randomNo = Math.floor((Math.random() * 98) + 1);

//     let randomLang = techs.filter((tech, index) => {
//         return index === randomNo;
//     })

//     let [tech] = randomLang;

//     res.status(200).json({ message: "Here is a random language for you", language: tech });
// }


const getRandomLanguage = async(req,res) => {
    try{
       const techs = await techModel.find();
       const index = Math.floor(Math.random()*techs.length);
       const randomTech = techs[index];
       res.status(200).json({message: "Random language selected successfully",tech: randomTech});
    }catch(err){
       res.status(500).json({ message: "Error fetching random language",error: err.message});
    }
}


// const getFilteredLanguages = (req, res) => {
//     try {
//         let { scope, difficulty, duration } = req.query;
//         let filteredTechs = techs;

//         let filterString = "";


//         // if (scope) {
//         //     filterString += "/scope";
//         //     filteredTechs = filteredTechs.filter((tech) => {
//         //         return tech.scope.some((item) => {
//         //             return item.toLowerCase() === scope.toLowerCase();
//         //         })
//         //     })
//         // }

//         if (scope) {
//             filterString += "/scope";
//             const scopes = scope.toLowerCase().split(',');
//             filteredTechs = filteredTechs.filter((tech) => {
//                 return tech.scope.some(item => scopes.includes(item.toLowerCase()));
//             })
//         }

//         if (difficulty) {
//             filterString += "/difficulty"
//             filteredData = filteredData.filter((data) => {
//                 return data.difficulty.toLowerCase() === difficulty.toLowerCase().trim()
//             })
//         }
//         if (duration) {
//             filterString += "/duration"
//             filteredData = filteredData.filter((data) => {
//                 let durationArray = data.duration.split(" ")
//                 return Number(durationArray[0]) <= Number(duration.toLowerCase().trim())
//             })
//         }
//         if (filteredTechs.length === 0) throw (`no data found for the filter applied as ${filterString}: ${scope} ${difficulty} ${duration} months`);
//         res.status(200).json({ message: "Here are the filtered languages", results: filteredTechs.length, languages: filteredTechs ,});
//     } catch (err) {
//         console.log("error while filter : ", err)
//         res.status(500).json({ message: "unable to get filter data", result: null, err })
//     }




    const getLanguagesBasedOnId = async(req,res) => {
        try{
            let  {id} = req.params;
            if (!id) throw ("invalid/empty id.");
            let result = techs.filter((tech) => {return tech.id == id});
            if (result.length == 0) { res.status(200).json({ message: `language with ${id} id not found !`, result }) }
            res.status(200).json({ message: `language with ${id} id found!`, result})
        }catch(err){
            res.status(400).json({message: "unable to get data", err});
        }
    }

    const postNewLanguage = (req,res) => {
        try{
            let{ name, duration, difficulty, scope} = req.body;

            if(!name || !duration || !difficulty || !scope) throw ("missing data to create a new language !")

            techs.push({ id: techs.length+1, name, duration, difficulty, scope})

            res.staus(202).json({ message: `new langauge ${name} has been added successfully!`})

        }catch(err){
            res.status(400).json({ message: "unable to add new language"});
        }
    }

}

export { apiIntro, getRandomLanguage, getFilteredLanguages, getAllLanguages, getLanguagesBasedOnId, postNewLanguage };