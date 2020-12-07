var express = require('express');
var router = express.Router();

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded 


router.post('/api/get-file', (req, res) => {
    //     let file = req.files['resturants'];
    console.log(req.files)
    res.status(200).json(true);
})

module.exports = router;