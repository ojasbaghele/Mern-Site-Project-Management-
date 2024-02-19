const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectName:{ type : String},
    reason:{ type : String},
    category:{ type : String},
    startDate:{ type : Date},
    type:{ type : String},
    priority:{ type : String},
    endDate:{ type : Date},
    skill:{ type : String},
    gitLink:{ type : String},
    status:{ type : String},
})
const ProjectModel = new mongoose.model('projects',projectSchema);
module.exports = ProjectModel;