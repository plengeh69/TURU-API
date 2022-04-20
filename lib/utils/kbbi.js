const { default: Axios } = require('axios')
const cheerio = require('cheerio')

const kbbi = (query) => {
    return new Promise(async (resolve, reject) => {
        Axios.get(`https://kbbi.web.id/${query}`).then((res) => {
            const $ = cheerio.load(res.data)
            const hasil = $('div#d1').text().trim()
            resolve({
                creator: "Arjn",
                code: 200,
                status: true,
                result: hasil
            })
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
}

module.exports = kbbi