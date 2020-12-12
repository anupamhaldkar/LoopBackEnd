var models = require('./server.js').models;
//model.profile.upsert({name:'ASH'},(err,profile))
//or we can use create() method
models.Profile.findOrCreate({name:'AH'},(err,profile) => {
   if(err)
    console.log("There was an error",err);
    else if(profile){
        profile.updateAttributes({
            email:"a@ah.com"
        }, (updateError,updated)=>{
            console.log("saved?",updateError,updated);
        });
    }
})