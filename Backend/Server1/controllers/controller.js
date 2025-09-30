let getHome = (req,res) => {
    res.status(200).render("home", {name:"saniya pawankar", age:"20"});
}

let getAbout = (req,res) => {
    res.status(200).render("about");
}

let getContact = (req,res) => {
    res.status(200).render("contact");
}

export {getHome, getAbout, getContact};