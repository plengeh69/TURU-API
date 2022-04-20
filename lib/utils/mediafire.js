const request = require('request')
const cheerio = require('cheerio')

const mfireRes = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            request(url, function(err, res, body) {
                if (!err && res.statusCode == 200) {
                    var $ = cheerio.load(body)
                    var title = $('body > div.mf-dlr.page.ads-alternate > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').text();
                    var sizefile = $('#downloadButton').text().replace('Download (', '').replace(')', '');
                    var filename = $('div.filename').text();
                    var urlRes = $('form > div > a').eq(1).attr('href');

                    request(`https://tinyurl.com/api-create.php?url=${urlRes}`, function(err, resp, html) {
                        resolve({
                            creator: "Arjn",
                            code: 200,
                            status: true,
                            result: {
                                title: title.trim(),
                                size: sizefile.trim(),
                                url: html
                            }
                        })
                    })

                }
            })
        } catch {
            reject({ creator: "Arjn", code: 403, status: false, message: "Not Found!" })
        }
    })
}

module.exports = mfireRes