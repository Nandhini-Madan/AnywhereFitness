module.exports = {
  checkInstructor
};

function checkInstructor(req, res, next) {
  // console.log(req.jwt);
  if (req.jwt && req.jwt.role === 'instructor') {
    next();
  } else {
    res.status(403).json({message: 'you are not authorized to be here'});
  }
}