__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

router.get('/#', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})

/* router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
}) */

module.exports = router
