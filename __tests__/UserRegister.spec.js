const request = require( "supertest" );
const { prefix } = require( "../utils" );

const app = require( "../app" );

describe( 'User registration', () =>
{


    it( "should return 201 when sign-up request is valid", ( done ) =>
    {
        request( app ).post( prefix( "users/register" ) )
            .send(
                {
                    username: "user one",
                    email: "user1@mail.com",
                    password: "test1pwd$",
                }
            )
            .then( res => 
            {
                expect( res.status ).toBe( 201 );
                done();
            } );
    } );


    it( "should return success message when request is successful", ( done ) =>
    {
        request( app ).post( prefix( "users/register" ) )
            .send(
                {
                    username: "user one",
                    email: "user1@mail.com",
                    password: "test1pwd$",
                }
            )
            .then( res => 
            {
                expect( res.body.message ).toBe( "User registered" );
                done();
            } );
    } );

} );
