const dotenv = require( "dotenv" );

dotenv.config();

const port = process.env.PORT || 8080;

module.exports =
{
    port
};
