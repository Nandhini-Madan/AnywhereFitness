let express = require("express");
let router = express.Router();
const db = require("../model/all_model")


router.get("/classes", (req, res) => {
    let subject = req.jwt.subject;
    db.getAllClassesByInstructorId(subject)
    .then(classes => {
        if(classes.length < 1){
            res.status(404).json({ message: "no classes found" });
        } else {
            res.status(200).json({ data: classes });
        }
    })
})


router.get('/classes/:id', (req, res) => {
    let { id } = req.params;
    if(Number(id)){
        db.getClassById(id)
        .then(returned => {
            res.status(200).json({ class: returned })
        })
        .catch(err => {
            res.status(500).json({ Message: "Could not find class with that id" })
        })
    } else {
        res.status(400).json({ error: "id must be a number" })
    }
})

router.post("/classes", (req, res) => {
    let newClass = req.body;
    let subject = req.jwt.subject;

    if(!newClass.name || !newClass.type || !newClass.start_time || !newClass.duration || !newClass.intensity || !newClass.location|| !newClass.max_class || newClass.id) {
    res.status(400).json({ message: "all fields required", data: newClass })
    } else {
        newClass.instructor_id = subject
        db.addClass(newClass)
        .then(addedClass => {
            res.status(201).json({ data: addedClass, message: "successfully added class" })
        })
    }
})


router.put('/classes/:id', (req, res) => {
    let { id } = req.params;
    let subject = req.jwt.subject;
    let changes = req.body;

    db.getClassById(id)
    .then(returnedClass => {
        if(returnedClass){
            if(returnedClass.instructor_id === subject){
                db.updateClassById(id, changes)
                .then(count => {
                    if(count === 1) {
                        db.getClassById(id)
                        .then(updatedClass => {
                            res.status(200).json({ success: `successfully updated class with id ${id}`, updated: updatedClass })
                        })
                        .catch(err => {
                            res.status(500).json({ Message: "Internal server error finding updated class" })
                        })
                    } else {
                        res.status(400).json({ Message: "Could not update class" })
                    }
                })
                .catch(err => {
                    res.status(500).json({ Message: "Internal server error updating class" })
                })
            } else {
                res.status(401).json({ Message: "Not authorized, this class is not assigned to this instructor" })
            }
        } else {
            res.status(404).json({ Message: "No classs found with requested id"})
        }
    })
    .catch(err => {
        res.status(500).json({ Message: "Internal server error finding class" })
    })
})

router.delete('/classes/:id', (req, res) => {
    let { id } = req.params;
    let instructorID = req.jwt.subject;
    db.getClassById(id)
    .then(returnedClass => {
        if(returnedClass.instructor_id === instructorID) {
            db.removeClassById(id)
            .then(count => {
                if(count > 0) {
                    res.status(200).json({ message: `successfully deleted class with id ${id}` })
                } else {
                    res.status(500).json({ errMessage: `could not delete class with id ${id}` })
                }
            })
        } else {
            res.status(404).json({ message: `no class with id ${id} found for current logged user ` })
        }
    })
    .catch(err => {
        res.status(500).json({ errMessage: "Internal error, could not get data" })
    })
});


module.exports = router;