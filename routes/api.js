import express from 'express';

const router = express.Router();

/////////////////////////////////////////////////////////////
// HOME GET ROUTE
/////////////////////////////////////////////////////////////
router.get("/", function(req, res) {
        res.json("This is just a frontend app, backend and databse not connected.");
});

export default router;