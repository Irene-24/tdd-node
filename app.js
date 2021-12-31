const express = require( "express" );
const userRoutes = require( "./routes/user.routes" );
const { prefix } = require( "./utils" );

const app = express();

app.use( prefix( "users" ), userRoutes );

app.get( "/", ( req, res ) =>
{
    res.send( "Hello World!" );
} );

module.exports = app;
