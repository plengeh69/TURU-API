const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const jadwaltv = (query) => {
    return new Promise(async (resolve, reject) => {
        Axios.get(`https://www.jadwaltv.net/channel/${query}`)
            .then(({ data }) => {
                var $ = cheerio.load(data)
                var hasil1 = []
                var hasil2 = []
                $('div > div > table:nth-child(3) > tbody > tr').each(function(i, result) {
                    hasil1.push({
                        jam: result.children[0].children[0].data,
                        tayang: result.children[1].children[0].data
                    })
                })
                $('div > div > table:nth-child(5) > tbody > tr').each(function(i, result) {
                    hasil2.push({
                        jam: result.children[0].children[0].data,
                        tayang: result.children[1].children[0].data
                    })
                })

                const jadwal = []

                for (let i = 1; i < hasil1.length; i++) {
                    jadwal.push(hasil1[i])
                }

                for (let i = 1; i < hasil2.length; i++) {
                    jadwal.push(hasil2[i])
                }
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result: {
                        jadwal
                    }
                })
            })
            .catch((err) => reject({ creator: "Arjn", code: 403, status: false, message: err }))
    })
}

module.exports = jadwaltv