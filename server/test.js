var models = require('./server.js').models;
//model.profile.upsert({name:'ASH'},(err,profile))
//or we can use create() method
models.Profile.findOrCreate({name:'AH'},(err,profile) => {
  console.log("data?",err,profile);
})