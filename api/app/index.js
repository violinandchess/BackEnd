const usersRouter = require( "./users/router" );
const articlesRouter = require( "./articles/router" );
const sessionRouter = require( "./session/router" );
const studentRouter = require( "./student/router" )
const validateToken = require( "../middlewares/validateToken" );

module.exports = ( app ) => {
    app.use( "/session", sessionRouter );
    app.use( "/student",validateToken, studentRouter );
    app.use( "/users", usersRouter );
    app.use( "/articles", validateToken, articlesRouter );
};












