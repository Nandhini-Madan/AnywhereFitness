const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const cookieParser=require("cookie-parser")
const restricted = require("../auth/restricted_middle")
const checkRole = require("../auth/check_role")
const authRouter = require("../auth/auth-router");
const clientRouter = require("../user/client_routher");
const instructorRouter = require("../user/instructor_routher");



server.use(cors());
server.use(helmet());
server.use(cookieParser())
server.use(express.json())

// endpoint
server.use("/api/auth", authRouter);
server.use("/api/client",restricted, clientRouter);
server.use("/api/instructor",checkRole('instructor'), instructorRouter);

server.get("/", (req, res) => {
    res.status(200).json({ message: "API is working " });
})


module.exports = server;