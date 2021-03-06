const mongoose = require('mongoose');

const Lead=new mongoose.Schema({
    customer_name: String,
    project_name: String,
    project_details:String,
    project_value:String,
    Segment_details:String,
    lead_submitted_by:String,
    lead_submitted_to:String,
    Open_time:String,
    Validate_or_reject_time:String,
    Closed_time:String,
    Update_time:String,
    Status:String
});

module.exports = mongoose.model('Lead', Lead);