var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var Contact = require('../models/contact');

////////////////////// GET ////////////////////
router.get('/', function (req, res, next) {
    console.log("get call -------------")
    Contact.find()
        .exec(function(err, contacts){
            if(err){
                return res.status(500).json({
                    title:'An error occured',
                    error: error
                });
            }
            res.status(200).json({
                title: 'Success',
                obj: contacts
            });
    });
});
////////////////////// PATCH //////////////////////////

router.patch('/:id',function(req, res, next){
   Contact.findById(req.params.id,function(err, contact){
        if(err){
            return res.status(500).json({
                title: 'An error occured',
                error: err
            });
        }
        if(!contact){
            return res.status(500).json({
                title: 'Message not found ',
                error: err
            });
        }
        contact.ImageUrl = req.body.ImageUrl;
        contact.Name = req.body.Name;
        contact.Number = req.body.Number;
        contact.Email = req.body.Email;
        contact.bFavourite = req.body.bFavourite;
        

        contact.save(function(err, result){
            if(err){
                return res.status(500).json({
                    title:'An error occured',
                    error: error
                });
            }
            res.status(200).json({
                title: 'Contact Updated',
                obj: result
            });
        });

   }); 
});


//////////////////// POST ///////////////////////////

router.post('/', function (req, res, next) {
    
    console.log("---------------------");
    console.log(req.body);
    console.log("---------------------");
    
    
    var contact = new Contact({
        ImageUrl:     req.body.ImageUrl,
        Name:         req.body.Name,
        Number:       req.body.Number,
        Email:        req.body.Email,
        bFavourite:   req.body.bFavourite,
    });


    contact.save(function(err, result){
        if(err){
            return res.status(500).json({
                title : 'An error occurred',
                error: err
            });
            
        }
        res.status(201).json({
            message : 'Saved message',
            obj: result
        });
        });
});

//////////////////// DELETE ///////////////////////////
router.delete('/:id',function(req, res, next){
    Contact.findById(req.params.id,function(err, contact){
         if(err){
             return res.status(500).json({
                 title: 'An error occured',
                 error: err
             });
         }
         if(!contact){
             return res.status(500).json({
                 title: 'Message not found ',
                 error: err
             });
         }
         
         
 
         contact.remove(function(err, result){
             if(err){
                 return res.status(500).json({
                     title:'An error occured',
                     error: error
                 });
             }
             res.status(200).json({
                 title: 'Contact Deleted',
                 _id: result
             });
         });
 
    }); 
 });


module.exports = router;
