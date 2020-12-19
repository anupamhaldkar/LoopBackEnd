var models = require('./server.js').models;
/*
var toSave =   [
    {name:'Anupam', email:'a12@h.com'},
    {name:'Anupam1', email:'a13@h.com'},
    {name:'Anupam2', email:'a11@h.com'},
    {name:'Anupam3', email:'a9@h.com'},
    {name:'Anupamr', email:'a8@h.com'},
    {name:'Anupam4', email:'a7@h.com'},
    {name:'Anupam5', email:'a6@h.com'},
    {name:'Anupam6', email:'a4@h.com'},
    {name:'Anupam87', email:'a5@h.com'},
    {name:'Anupam8', email:'a2@h.com'},
    {name:'Anupam9', email:'a3@h.com'},
    {name:'Anupam12', email:'a1@h.com'},
    {name:'Anupa1m', email:'a32@h.com'},
];

toSave.map( obj => {
    models.Profile.create(obj, (err,created)=>{
        console.log("Created?",created);
    })
})

*/

var filter ={
    where:{
        email:{like:'a'}
    },           //Kind of SQL where Clause
    order:'id ASC',   //order by: "field direction"
    limit:10
}

//profile.Posts.Image

models.Profile.find(filter,(err,found)=>{
    console.log("Found?",err,found);
})
