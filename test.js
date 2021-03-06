	
	

	var   assert 	= require( "assert" )
		, index 	= 0
		, lens 		= []
		, results 	= [199,31,79,11,176,232,186,31,50,11,190,31,48,11,188,90,61,90,108,105,119,101,111,113,97,90,90,173,191,175,188,90,46,90,108,105,119,101,111,113,97,90,90,238,192,202];


	console.log = function( data ){
		//lens.push( data.length);
		assert.equal( data.length, results[ index ], "log line has the wrong length: " + data );
		index++;
	}


	var log = require( "./" );



	log.debug( "debug %s ==> %s", 1, new Buffer( "whoa!" ), { go: "is a cool language!"} );
	log.info( "info" );
	log.warn( "warn", new Date(), 455 );
	log.error( "error", { "test": 3 } );
	log.highlight( "highlight" );
	log.dir( { hi: 1 } );
	log.trace( new Error( "testing the sh*t" ) );



	log( 2, "er %s: %s", 22, new Error( "whoa!" ), "hui", new Error( "" ), new Buffer(22) );


	log.disable();

	log.info( "this should not show up!" );

	log.enable();

	log.info( "this should show up!" );


	log.wtf( "nope nope nope!" );


	//console.dir( JSON.stringify( lens ) );