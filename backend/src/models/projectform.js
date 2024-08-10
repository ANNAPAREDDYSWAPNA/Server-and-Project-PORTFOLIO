const mongoose = require("mongoose");
const ProjectSchema = mongoose.Schema({
  application_name: {
    type: String,
    required: true
  },
  developers: {
    type: String,
    required: true
  },
  app_url: {
    type: String,
    required: true
  },
  db_name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
},

{ 
  collection: 'projects' 
});

// export model user with ServerformSchema
module.exports = mongoose.model("project",ProjectSchema);