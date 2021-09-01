const express = require("express");
const router = express.Router();
const db = require("../model/all_model");

// working
router.get("/classes", (req, res) => {
  let { role, username } = req.jwt;
  db.getAllClasses()
    .then((classes) => {
      res.status(200).json({ data: classes, jwt: req.jwt });
    })
    .catch((err) => {
      res.status(500).json({ err });
    });
});

router.post("/classes/sessions", (req, res) => {
  
  let newSession = req.body;
  console.log(req.body);
  let userID = req.jwt.subject;
  let timeStamp = new Date().toString().split(" ").slice(0, 5).join(" ");
  newSession.users_id = userID;
  newSession.joined = timeStamp;
  if (!newSession.classes_id) {
    res.status(400).json({ message: "class id required" });
  } else {
    db.addSession(newSession)
      .then((addedSession) => {
        res.status(201).json({ addedSession, message: "New session added" });
      })
      .catch((err) => {
        res.status(500).json({
          Message: "please try again",
          err,
        });
      });
  }
});

// working
router.get("/classes/sessions", (req, res) => {
  let userID = req.jwt.subject;
  db.getAllSessionsByClientId(userID)
    .then((classes) => {
      res.status(200).json({ classes, message: "all classes for logged user" });
    })
    .catch((err) => {
      res.status(500).json({
        Message: "could not get data please try again",
      });
    });
});

// why is it not working?
router.get("/classes/sessions/:id", (req, res) => {
  let { id } = req.params;
  console.log(req.params);
  let userID = req.jwt.subject;
  db.getSessionById(id)
    .then((session) => {
      if (session.users_id === userID) {
        res.status(200).json({ session, message: "Session for logged user" });
      } else {
        res.status(404).json({
          message: "no session found for current logged user",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        Message: " could not get data please try again",
      });
    });
});

// working
router.get("/classes/:id", (req, res) => {
  let { id } = req.params;
  if (Number(id)) {
    db.getClassById(id)
      .then((returned) => {
        res.status(200).json({ class: returned });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errMessage: "Could not find class with that id" });
      });
  } else {
    res.status(400).json({ error: "id must be a number" });
  }
});

router.delete("/classes/sessions/:id", (req, res) => {
  let { id } = req.params;
  console.log("param",req.params)
  let userID = req.jwt.subject;
  db.getSessionById(id)
    .then((session) => {
      console.log(session);
      console.log(session.users_id);
      if (session.users_id === userID) {
        db.removeSessionById(id).then((count) => {
          if (count > 0) {
            res
              .status(200)
              .json({ message: `successfully deleted session with id ${id}` });
          } else {
            res
              .status(500)
              .json({ errMessage: `could not delete session with id ${id}` });
          }
        });
      } else {
        res.status(404).json({
          message: `no session with id ${id} found for current logged user `,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ errMessage: "Internal error, could not get data" });
    });
});

router.put("/classes/sessions/:id", (req, res) => {
  let { id } = req.params;
  let subject = req.jwt.subject;
  let changes = req.body;

  if (changes.classes_id) {
    db.getSessionById(id)
      .then((session) => {
        if (session) {
          if (session.users_id === subject) {
            db.updateSessionById(id, changes)
              .then((count) => {
                if (count === 1) {
                  db.getSessionById(id)
                    .then((updatedSession) => {
                      res.status(200).json({
                        success: `successfully updated session ${id}`,
                        updated: updatedSession,
                      });
                    })
                    .catch((err) => {
                      res
                        .status(500)
                        .json({ errMessage: "server error please try again" });
                    });
                } else {
                  res
                    .status(400)
                    .json({ errMessage: "Could not update class" });
                }
              })
              .catch((err) => {
                res
                  .status(500)
                  .json({ errMessage: "server error please try again" });
              });
          } else {
            res.status(401).json({
              errMessage:
                "Not authorized, this session is not assigned to this client",
            });
          }
        } else {
          res
            .status(404)
            .json({ errMessage: "No session found with requested id" });
        }
      })
      .catch((err) => {
        res
          .status(500)
          .json({ errMessage: "Internal server error finding session" });
      });
  } else {
    res.status(400).json({ message: "classes id is required" });
  }
});

module.exports = router;
