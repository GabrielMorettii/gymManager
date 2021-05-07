const express = require('express');
const instructor = require('./app/controllers/instructors');
const members = require('./app/controllers/members');
const routes = express.Router();

routes.get("/", function(req,res){
    return res.redirect("/instructors")
})

routes.get("/instructors", instructor.index)
routes.get("/instructors/create", instructor.create)
routes.get("/instructors/:id", instructor.show)
routes.get("/instructors/:id/edit", instructor.edit)
routes.post("/instructors", instructor.post)
routes.put("/instructors", instructor.put)
routes.delete("/instructors", instructor.delete)

// Members 

routes.get("/members", members.index)
routes.get("/members/create", members.create)
routes.get("/members/:id", members.show)
routes.get("/members/:id/edit", members.edit)
routes.post("/members", members.post)
routes.put("/members", members.put)
routes.delete("/members", members.delete)



module.exports = routes