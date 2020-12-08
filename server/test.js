var models = require('./server.js').models;
models.Profile.findOrCreate({name:'AH'},(err,profile) => {
  console.log("data?",err,profile);
})