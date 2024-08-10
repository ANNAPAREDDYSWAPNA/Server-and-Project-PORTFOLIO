// FILENAME : ServerController.js

const Project = require("../models/projectform");

// Define the addServer function
const addProject = async (req, res, next) => {
  console.log(req.body)
  try {
    // Extract server data from request body
    const {
        application_name,
        developers,
        app_url,
        db_name,
        status
    } = req.body;

    // Create a new server instance
    const newProject = new Project({
        application_name,
        developers,
        app_url,
        db_name,
        status
    });

    // Save the new server to the database
    await newProject.save();

    // Respond with success message
    res.status(201).json({ message: 'Project added successfully' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Failed to add project' });
  }
};

const getProject = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteProject = async (req, res) => {
  const _id=req.params.id
  try {
    const project = await Project.findByIdAndDelete({_id});
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 const updateProject=async (req, res, next)=>{
  const _id = req.params.id
  const {
  application_name,
  developers,
  app_url,
  db_name,
  status} = req.body;
  let prodata;
  try{
      prodata = await Project.findByIdAndUpdate(_id,{
        application_name,
        developers,
        app_url,
        db_name,
        status
      });
  }catch(err){
      return console.log(err)
  }
  if(!prodata){
      return res.status(400).json({message:"Unable to update the users."})
  }
  return res.status(200).json({prodata})
}
// const getStorage = async (req, res, next) => {
//   try {
//     const servers = await Server.find();
//     const storageValues = servers.map(server => server.storage);
//     res.json({ storageValues });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: err.message });
//   }
// };



exports.addProject = addProject;
exports.getProject = getProject;
exports.deleteProject = deleteProject;
exports.updateProject = updateProject;
//exports.getStorage = getStorage;



