const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const studentSchema = new Schema( {
    RegNo: { type: String, required: true },
    DeviceID: { type: Number, required: true },
    SName: { type: String, required: true},
} );

module.exports = mongoose.model( "Student", studentSchema );
