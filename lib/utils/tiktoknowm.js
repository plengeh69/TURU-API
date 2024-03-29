const axios = require('axios')
const cheerio = require('cheerio')
const qs = require('qs')
const request = require('request')

const tiktokNoWm = (url) => {
    return new Promise(async (resolve, reject) => {
        axios.get('https://ttdownloader.com/', {
            headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
        })
        .then(({ data }) => {
            const $ = cheerio.load(data)
            let token = $('#token').attr('value')
            let config = {
                'url': url,
				'format': '',
				'token': token
            }
            axios('https://ttdownloader.com/req/', {
                method: 'POST',
			    data: new URLSearchParams(Object.entries(config)),
			    headers: {
				    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				    "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			    }
            })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result: {
                        video: $('div:nth-child(3) > div.download > a').attr('href'),
                        videonowm: $('div:nth-child(2) > div.download > a').attr('href'),
                        audio: $('div:nth-child(4) > div.download > a').attr('href')
                    }
                })
            })
        })
        .catch((e) => {
            console.log(e)
            reject({
                creator: "Arjn",
                code: 503,
                status: false,
                message: "Server Maintenance!"
            })
        })
    })
}

module.exports = tiktokNoWm