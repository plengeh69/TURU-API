const cheerio = require('cheerio')
const { default: Axios } = require('axios')

const lirikRes = (query) => {
    return new Promise(async (resolve, reject) => {
        var baseURI = 'https://www.musixmatch.com'
        Axios.get(baseURI + '/search/' + query)
            .then(async ({ data }) => {
                const $ = cheerio.load(data)
                const hasil = {}
                const link = baseURI + $('div.media-card-body > div > h2').find('a').attr('href')
                await Axios.get(link)
                    .then(({ data }) => {
                        const $$ = cheerio.load(data)
                        hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
                        $$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
                            hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
                        })
                        resolve(hasil)
                    })
                    .catch((err) => {
                        console.log(err)
                        reject({
                            creator: "Arjn",
                            code: 503,
                            status: false,
                            message: "Server Maintenance!"
                        })
                    })
            })
    })
}

module.exports = lirikRes