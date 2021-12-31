const express = require( "express" );
const userRoutes = require( "./routes/user.routes" );

const app = express();

const prefix = ( path, prefix = "/api/v1" ) => `${ prefix }/${ path }`;

app.use( prefix( "users" ), userRoutes );

app.get( "/", ( req, res ) =>
{
    res.send( "Hello World!" );
} );

module.exports = app;
