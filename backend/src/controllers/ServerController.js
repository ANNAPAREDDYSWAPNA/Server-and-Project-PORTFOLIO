// FILENAME : ServerController.js

const Server = require("../models/serverform");

// Define the addServer function
const addServer = async (req, res, next) => {
  console.log(req.body)
  try {
    // Extract server data from request body
    const {
      vm_name,
      os,
      version,
      ram,
      storage,
      vcpu,
      public,
      private,
      assigned_to,
      purpose
    } = req.body;

    // Create a new server instance
    const newServer = new Server({
      vm_name,
      os,
      version,
      ram,
      storage,
      vcpu,
      public,
      private,
      assigned_to,
      purpose
    });

    // Save the new server to the database
    await newServer.save();

    // Respond with success message
    res.status(201).json({ message: 'Server added successfully' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Failed to add server' });
  }
};

const getServer = async (req, res) => {
  try {
    const servers = await Server.find();
    res.json(servers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteServer = async (req, res) => {
  const _id=req.params.id
  try {
    const server = await Server.findByIdAndDelete({_id});
    if (!server) {
      return res.status(404).json({ message: "Server not found" });
    }
    res.json({ message: "Server deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 const updateServer=async (req, res, next)=>{
  const _id = req.params.id
  const {vm_name,
    os,
    version,
    ram,
    storage,
    vcpu,
    public,
    private,
    assigned_to,
    purpose} = req.body;
  let serdata;
  try{
      serdata = await Server.findByIdAndUpdate(_id,{
        vm_name,
        os,
        version,
        ram,
        storage,
        vcpu,
        public,
        private,
        assigned_to,
        purpose
      });
  }catch(err){
      return console.log(err)
  }
  if(!serdata){
      return res.status(400).json({message:"Unable to update the users."})
  }
  return res.status(200).json({serdata})
}
const getStorage = async (req, res, next) => {
  try {
    const servers = await Server.find();
    const storageValues = servers.map(server => server.storage);
    res.json({ storageValues });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
const getRam = async (req, res, next) => {
  try {
    const servers = await Server.find();
    const ramValues = servers.map(server => server.ram);
    res.json({ ramValues });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};


// Export the addServer function
exports.addServer = addServer;
exports.getServer = getServer;
exports.deleteServer = deleteServer;
exports.updateServer = updateServer;
exports.getStorage = getStorage;
exports.getRam = getRam;



