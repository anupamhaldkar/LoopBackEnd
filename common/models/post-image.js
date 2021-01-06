'use strict';
const sharp = require('sharp');
module.exports = function(Postimage) {

    Postimage.remoteMethod(
        'upload',
        {
            description: 'uploads a file',
            accepts: [
                {arg:'ctx',type:'object', http:{source: 'context'}},
                {arg:'options', type:'object', http:{source:'query'}},
                {arg:'access_token', type:'string'},
                {arg: 'post_ID', type:'string'},
        ],
        returns:{
            arg: 'fileObject', type:'object', root:true,
        },
        http:{verb: 'post'},
        }
    )
};
