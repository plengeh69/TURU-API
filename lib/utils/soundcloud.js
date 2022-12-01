const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const FormData = require('form-data')
const { bitly } = require('./shorturl')

const scdl = (url) => new Promise(async (resolve, reject) => {
    try {
        axios.get('https://soundcloudmp3.org/id').then((data) => {
            let $ = cheerio.load(data.data)
            let token = $('form#conversionForm > input[type=hidden]').attr('value')
            const options = {
                method: 'POST',
                url: 'https://soundcloudmp3.org/converter',
                headers: {
                    "content-type": "application/x-www-form-urlencoded;",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": data["headers"]["set-cookie"],
                },
                formData: {
                    _token: token,
                    url: url
                }
            }
            request(options, async function(err, res, body) {
                let $$ = cheerio.load(body)
                let short = await bitly($$('#download-btn').attr('href'))
                resolve({
                    creator: '@arjn.me',
                    code: 200,
                    status: true,
                    result: {
                        title: $$('#preview > div:nth-child(3) > p:nth-child(2)').text().replace('Title:', ''),
                        thumbnail: $$('#preview > div:nth-child(3) > img').attr('src'),
                        quality: $$('#preview > div:nth-child(3) > p:nth-child(4)').text().replace('Quality:', ''),
                        duration: $$('#preview > div:nth-child(3) > p:nth-child(3)').text().replace(/Length\:|Minutes/gi, ''),
                        downloadUrl: short.result.link
                    }
                })
            })
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

module.exports = scdl