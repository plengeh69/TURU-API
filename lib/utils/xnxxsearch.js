const fetch = require('node-fetch')
const cheerio = require('cheerio')
const { relativeTimeThreshold } = require('moment')

const xsearch = (query) => {
    return new Promise(async (resolve, reject) => {
        var BASEurl = 'https://www.xnxx.com'
        fetch(`${BASEurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, { method: 'get' })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res, {
                    xmlMode: false
                });

                let title = [];
                let desc = [];
                let url = [];
                let result = [];

                $('div.mozaique').each(function(a, b) {
                    $(b).find('div.thumb').each(function(c, d) {
                        url.push(BASEurl + $(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
                    })
                })

                $('div.mozaique').each(function(a, b) {
                    $(b).find('div.thumb-under').each(function(c, d) {
                        desc.push($(d).find('p.metadata').text())
                        $(d).find('a').each(function(e, f) {
                            title.push($(f).attr('title'))
                        })
                    })
                })

                for(let i = 0; i < title.length; i++) {
                    result.push({
                        title: title[i],
                        info: desc[i],
                        url: url[i]
                    })
                }

                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result
                })
            })
            .catch((err) => reject({ creator: "Arjn", code: 503, status: false, message: err }))
    })
}

module.exports = xsearch