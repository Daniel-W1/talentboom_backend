import Roadmap from "../models/roadmap.js";

// Create a new roadmap
const createroadmap = async (req, res) => {
    try {
        const { title, description, estimatedTime, category, fileLink } = req.body;
        const roadmap = new Roadmap({ title, description, estimatedTime, category, fileLink  });
        await roadmap.save();
    
        res.status(201).json(roadmap);
    } catch (error) {
        res.status(500).json({ error: "Failed to create the roadmap" });
    }
}

// Get all roadmaps
const getroadmaps = async (req, res) => {
    try {
        // console.log('finding here');
        const roadmaps = await Roadmap.find();
        res.status(200).json(roadmaps);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the roadmaps" });
    }
}

// Get a single roadmap by ID
const getroadmapById = async (req, res) => {
    try {
        const roadmapId = req.params.id;
        const roadmap = await Roadmap.findById(roadmapId);

        if (!roadmap) {
            return res.status(404).json({ error: "roadmap not found" });
        }

        res.status(200).json(roadmap);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch the roadmap" });
    }
}

// Update a roadmap by ID
const updateroadmap = async (req, res) => {
    try {
        const roadmapId = req.params.id;
        const { title, description, estimatedTime, category, fileLink  } = req.body;

        const roadmap = await Roadmap.findById(roadmapId);

        if (!roadmap) {
            return res.status(404).json({ error: "roadmap not found" });
        }

        roadmap.title = title;
        roadmap.description = description;
        roadmap.estimatedTime = estimatedTime;
        roadmap.category = category;
        roadmap.fileLink = fileLink;

        await roadmap.save();

        res.status(200).json(roadmap);
    } catch (error) {
        res.status(500).json({ error: "Failed to update the roadmap" });
    }
}

// Delete a roadmap by ID
const deleteroadmap = async (req, res) => {
    try {
        const roadmapId = req.params.id;
        const roadmap = await Roadmap.findById(roadmapId);

        if (!roadmap) {
            return res.status(404).json({ error: "roadmap not found" });
        }

        await roadmap.remove();

        res.status(200).json({ message: "roadmap has been deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete the roadmap" });
    }
}

export { createroadmap, getroadmaps, getroadmapById, updateroadmap, deleteroadmap };

