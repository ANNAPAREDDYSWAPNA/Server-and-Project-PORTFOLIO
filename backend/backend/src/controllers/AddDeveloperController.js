const Developer = require('../models/developer');

const addDeveloper = async (req, res) => {
    console.log(req.files[0]);
    const { devName, role, projectDetails } = req.body;
    console.log(req.body);

    const image = req.files[0].filename;
    
    try {
        const developer = new Developer({
            devName,
            role,
            projectDetails: JSON.parse(projectDetails), 
            image
        });

        const savedDeveloper = await developer.save();

        res.status(200).json({ message: 'Developer added successfully' });
    } catch (error) {
        console.error('Error adding developer:', error);
        res.status(500).json({ error: 'An error occurred while adding developer' });
    }
};
const getDeveloper = async (req, res) => {
  try {
    const developers = await Developer.find();
    res.status(200).json(developers);
  } catch (error) {
    console.error('Error fetching developers: ', error);
    res.status(500).json({ error: 'An error occurred while fetching developers' });
  }
};
const deleteDeveloper = async(req, res) => {
  
  try {
    // Find server by ID and delete it
    const deletedDeveloper = await Developer.findByIdAndDelete(req.params.id);
    if (deletedDeveloper) {
      res.json({ message: 'developer deleted successfully' });
    } else {
      res.status(404).json({ message: 'developer not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete developer' });
  }
};


exports.addDeveloper = addDeveloper;
exports.getDeveloper = getDeveloper;
exports.deleteDeveloper = deleteDeveloper;

