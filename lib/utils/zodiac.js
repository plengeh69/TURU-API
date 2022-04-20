const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const zodiac = (query) => {
    return new Promise(async (resolve, reject) => {
        Axios.get(`https://m.fimela.com/zodiak/${query}`)
            .then((resp) => {
                if (resp.status == 200) {
                    const $ = cheerio.load(resp.data)
                    const dataumum = $('div.zodiak--content__item.zodiak--content__umum > p').text()
                    const datalove = $('div.zodiak--content__item.zodiak--content__love > p').text()
                    const datakeuangan = $('div.zodiak--content__item.zodiak--content__keuangan > p').text()
                    const result = {
                        creator: "Arjn",
                        code: 200,
                        status: true,
                        result: {
                            umum: dataumum.trim(),
                            love: datalove.trim(),
                            keuangan: datakeuangan.trim()
                        }
                    }
                    resolve(result)
                }
            })
            .catch(() => reject({ creator: "Arjn", code: 404, status: false, message: "Not Found!" }))
    })
}

module.exports = zodiac