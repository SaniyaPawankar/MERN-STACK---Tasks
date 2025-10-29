
const home = (req,res) => {
    res.status(200).json({message: "Test route is working fine"});
}

export { home };