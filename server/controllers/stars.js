var mongoose = require('mongoose');
var star = mongoose.model('Star');
var note = mongoose.model('Note');
module.exports = {
	index: function(req, res){
		var results = star.find({}, function(badstuff, goodstuff){
			if(badstuff){
				res.json({star: "Error", error: badstuff})
			}
			else{
				res.send(goodstuff)
			}
		})
	},
	Firstfive: function(req, res){
		star.findFive({}, function(badstuff, goodstuff){
			if(badstuff){
				res.json({star: "Error", error: badstuff})
			}
			else{
				res.send(goodstuff)
			}
		})
	},
	
	create: function(req, res) {
		var new_star = new star();
	    new_star.name = req.body.name;
	    new_star.description = req.body.description;
	    new_star.author = req.body.author;
	    new_star.save(function(err){
	      if(err){
	        console.log("errors you have errors here");
	        res.send(err);
	      }
	      else{
	        return res.json(new_star);
	      }
	    })
	},

	show: function(req,res){
		star.findOne({_id: req.params.id})
		.then((star) =>{
			res.json({star: star})
		})
		.catch((err)=>{
			res.json({error: err})
    	})
	},

	update: function(req,res){
		var this_star = star.update({_id:req.params.id}, {name: req.body.name, description: req.body.description}, function(err, response){
    	return res.json(response);
    })
	},

	destroy: function(req,res){
	   star.remove({_id: req.params.id})
	   .then((data) => {
	   	return res.json(data)
    	})
		.catch((err)=>{
			res.json({star: "error", error: err})
		})
	},
	notecreate: function(req,res){
		console.log(req.body)
	    star.findOne({_id: req.params.id}, function(err, star){
	    new_note = new note();
	    new_note.name = req.body.author;
	    new_note.content = req.body.text;
	    new_note._star = req.params.id;
	    new_note.save(function(err){
	      star.notes.push(new_note);
	      star.save(function(err){
	      if(err){
	       console.log("errors you have errors");
	        res.json({star: "error", error: err})
	      }
	      else{
	        return res.json(new_note);
	      }
	      })
	    })
	  })
	}
}