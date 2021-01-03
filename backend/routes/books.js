const { Router } = require('express');

const router = Router()

router.get('/', (req, res) => {
    res.json({text: "It works!"});
});

module.exports = router;
