var models = require('./server.js').models;
//model.profile.upsert({name:'ASH'},(err,profile))
//or we can use create() method
models.Profile.findOrCreate({name:'AH'},(err,profile) => {
   if(err)
    console.log("There was an error",err);
    else if(profile){
        profile.email='a@ah.com';
        profile.save((ue,updated) => {
            console.log("Save?",updated);
        });
        
        
    }
})