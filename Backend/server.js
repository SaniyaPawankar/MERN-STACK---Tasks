import express from "express"

const app = express();

let port = 5100;


app.listen(port, () => {
    console.log(`Sever is running on port ${port}!`);
})

app.get("/", (req,res) => {
   res.send("Hello");
})