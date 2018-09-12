const mongoose = require( "mongoose" );

const FPRecord = mongoose.model( "FPRecord" );


const createFingerPrintRecord = async (  data ) => {
 
    const student = new FPRecord( data );
    const query = await student.save();
    return query;
};

const findFingerPrintRecords = () => FPRecord.find( );

const findFingerPrintRecordDetails = ( id ) => FPRecord.findOne( { _id: id } );

module.exports = {
    createFingerPrintRecord,
    findFingerPrintRecords,
    findFingerPrintRecordDetails,
};
