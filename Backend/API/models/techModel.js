import mongoose from "mongoose";

const techSchema = new mongoose.Schema({
    id: Number,
    name: String,
    duration: String,
    difficulty: String,
    scope: [String],
});

let techModel = mongoose.model("techs", techSchema);

export {techModel};