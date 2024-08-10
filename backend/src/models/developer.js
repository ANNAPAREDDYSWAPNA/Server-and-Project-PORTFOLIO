const mongoose = require('mongoose');

const DeveloperSchema = new mongoose.Schema({
    devName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    projectDetails: [{
        projectName: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }],
    image: {
        type: String,
    }
}, { 
    collection: 'AddDeveloper' 
});

module.exports = mongoose.model('AddDeveloper', DeveloperSchema);


// const mongoose = require('mongoose');
// const DeveloperSchema = new mongoose.Schema({
//     devName: {
//         type: String,
//         required: true
//       },
//       role: {
//         type: String,
//         required: true
//       },
//       projectDetails: [
//         {
//           type: String,
//           required: true
//         },
//         {
//           type: String,
//           required: true
//         }
//       ],
//       image: {
//         type: String,
//       }
// },

// { 
//     collection: 'AddDeveloper' 
// });

// module.exports = mongoose.model('AddDeveloper', DeveloperSchema);