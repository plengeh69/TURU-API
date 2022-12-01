const axios = require('axios')
const cheerio = require('cheerio')
const fakeUa = require('../fakeua')

const scsearch = (query) => new Promise(async (resolve, reject) => {
    try {
        let baseURI = 'https://m.soundcloud.com'
        let response = await axios.get(`${baseURI}/search?q=${encodeURIComponent(query)}`, {
            headers: { 'User-Agent': fakeUa() },
        })
        let $ = cheerio.load(response.data)
        let result = []
        $('div > ul > li > div').each(function(a, b) {
            let title = $(b).find('a').attr('arial-label')
            let url = baseURI + $(b).find('a').attr('href')
            let thumbnail = $(b).find('a > div > div > div > picture > img').attr('src')
            let artist = $(b).find('a > div > div > div').eq(1).text()
            let views = $(b).find('a > div > div > div > div > div').eq(0).text()
            let timestamp = $(b).find('a > div > div > div > div > div').eq(1).text()
            let release = $(b).find('a > div > div > div > div > div').eq(2).text()

            result.push({
                title,
                url,
                thumbnail,
                artist,
                views,
                timestamp,
                release
            })
        })
        resolve({
            creator: '@arjn.me',
            code: 200,
            status: true,
            result
        })
    } catch (err) {
        console.log(err)
        reject({
            creator: '@arjn.me',
            code: 503,
            status: false,
            message: '[!] Server maintenance!'
        })
    }
})

module.exports = scsearch