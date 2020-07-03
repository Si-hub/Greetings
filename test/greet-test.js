describe("The Greetings test function", function(){
    it('should return a message if the user did not select the language' , function(){
        let greetingsList = greetings()

        assert.equal(greetingsList.greet(","),'Please select a language')
        assert.equal(greetingsList.greetingsCounter(),0);

    })

    it('should return a message if the user entered a number instead of a name' , function(){
        let greetingsList = greetings()

        assert.equal(greetingsList.greet(20,"IsiXhosa"),'Nceda ufake igama lakho eli lilo')
        assert.equal(greetingsList.greet(20,"English"),'Please put your name, not a number')
        assert.equal(greetingsList.greet(20,"Afrikaans"),'Plaas jou korrekte naam en nie nommer nie')
        assert.equal(greetingsList.greetingsCounter(),0);

    })

    it('should return a message if the user did not enter the name' , function(){
        let greetingsList = greetings()

        assert.equal(greetingsList.greet("","IsiXhosa"),'Nceda ufake igama lakho')
        assert.equal(greetingsList.greet("","English"),'Please put your name')
        assert.equal(greetingsList.greet("","Afrikaans"),'Plaas jou naam')
        assert.equal(greetingsList.greetingsCounter(),0);

    })

    it('should greet you with the name entered by user, with selected language' , function(){
        let greetingsList = greetings()

        greetingsList.greet('Sim', 'IsiXhosa')
        assert.equal(greetingsList.greet("Sim","IsiXhosa"),'Molo Sim')
        assert.equal(greetingsList.greetingsCounter(),1);

    })

    it('counter should return the number of names entered by users' , function(){
        let greetingsList = greetings()

        greetingsList.greet('Sim', 'IsiXhosa')
        greetingsList.greet('Kuhle', 'English')
        assert.equal(greetingsList.greetingsCounter(),2);

    })

    it('counter should not increase the number when it gets duplicate' , function(){
        let greetingsList = greetings()

        greetingsList.greet('Sim', 'IsiXhosa')
        greetingsList.greet('Sim', 'IsiXhosa')
        assert.equal(greetingsList.greetingsCounter(),1);

    })
})