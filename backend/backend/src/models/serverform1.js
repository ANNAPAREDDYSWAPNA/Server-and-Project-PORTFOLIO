//FILENAME : serverform.js

const mongoose = require("mongoose");

const ServerFormSchema = mongoose.Schema({
  vm_name: {
    type: String,
    required: true
  },
  os: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  },
  ram: {
    type: String,
    required: true
  },
  storage: {
    type: String,
    required: true
  },
  vcpu: {
    type: String,
    required: true
   
  },
  public: {
    type: String,
    required: true
  },
  private: {
    type: String,
    required: true
  },
  assigned_to: {
    type: String,
    required: true
  },
  purpose: {
    type: String,
    // required: true
  },
},

{ 
  collection: 'server1' 
});

// export model user with ServerformSchema
module.exports = mongoose.model("server1", ServerFormSchema);