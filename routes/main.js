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

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : 'Multi prefix',
            namabot: 'ImmPrmdy_',
            namaowner: 'Arjn',
            instagram: 'arjn.id',
            youtube : 'Gak Punya'
        }
    }
    res.json(config)
})

module.exports = router
