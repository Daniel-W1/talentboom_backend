import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RoadmapSchema = new Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true
    },
    estimatedTime:{
        type: String,
        required: true,
    },
    fileLink:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },

} , {timestamps: true});

const Roadmap = mongoose.model('Roadmap', RoadmapSchema);
export default Roadmap;

