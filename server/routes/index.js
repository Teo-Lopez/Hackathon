const router = require("express").Router();
const authRouter = require('./auth.routes')


router.use("/auth", authRouter);

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;