const mongoose = require( "mongoose" );

const Student = mongoose.model( "Student" );


const createStudent = async (  data ) => {
 
    const student = new Student( data );
    const query = await student.save();
    return query;
};

const findStudents = () => Student.find( );

const findStudentsDetails = ( id ) => Student.findOne( { _id: id } );

module.exports = {
    createStudent,
    findStudents,
    findStudentsDetails,
};
