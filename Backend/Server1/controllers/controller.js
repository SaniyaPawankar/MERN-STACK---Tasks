let users = [];

let getHome = (req,res) => {
    // res.status(200).render("home", {name:"saniya pawankar", age:"20"});
    res.status(200).render("home");
}

let getAbout = (req,res) => {
    res.status(200).render("about", {users});
}

let getContact = (req,res) => {
    res.status(200).render("contact");
}

let postFormData = (req,res) => {
    users.push(req.body);
    res.status(200).redirect("/about");
}

export {getHome, getAbout, getContact, postFormData};