const mongoose = require( "mongoose" );

const Schema = mongoose.Schema;

const studentSchema = new FPRecord( {
    DeviceID: { type: Number, required: true },
    RecordedTime: { type: Number, required: true }
  
} );

module.exports = mongoose.model( "Student", studentSchema );
