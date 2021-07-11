const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// Task Model
const Task = require('../models/Task');

// Workspace
/*router.get('/newWork', (req, res) => {
    res.render('workspace');
})

// Workspace handle
router.post('/workspace', (req, res) => {
    const content = req.body;
    const newTask = new Task({
        content
    })
    newTask.save()
    .then(task => {
        res.redirect
    })*/

router.get('/newWork', (req, res) => {
    res.redirect('/workspaceOpen');
});

/*router.get('/newWork', ensureAuthenticated, (req, res) => {
    var newTask = new Task();
    newTask.save(function(err,data){
        if(err){
            console.log(err);
        }else{
            res.redirect('/task/'+data._id);
        }
    })
})

router.get('/:id', ensureAuthenticated, (req, res) => {
    if(req.params.id){
        Task.findOne({_id: req.params.id},function(err,data){
            if(err){
                console.log(err);
               // res.render('error');
            }
            if(data){
                res.render('workspace', {
                    name: req.user.name,
                    content: data.content
                });
            }else{
                console.log(err);
               // res.render('error');
            }
        })
    }
})*/

module.exports = router;