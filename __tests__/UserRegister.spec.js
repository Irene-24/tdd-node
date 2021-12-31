const request = require( "supertest" );
const app = require( "../app" );

it( "should return 200 when sign-up request is valid", ( done ) =>
{
    request( app ).post( "/api/v1/users" )
        .send(
            {
                username: "user one",
                email: "user1@mail.com",
                password: "test1pwd$",
            }
        ).expect( 200, done );
} );
