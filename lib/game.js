const fetch = require('node-fetch')
const request = require('request')
const { default: Axios } = require('axios')
const Crypto = require('crypto')
const cheerio = require('cheerio')

const family = () => new Promise(async (resolve, reject) => {
    try {
        let src = await (await fetch('https://raw.githubusercontent.com/plengeh69/database/master/games/family100.json')).json()
        let json = src[Math.floor(Math.random() * src.length)]
        resolve({
            creator: "Arjn",
            code: 200,
            status: true,
            result: {
                soal: json.soal,
                jawaban: json.jawaban
            }
        })
    } catch (err) {
        console.error(err)
        reject({
            creator: "Arjn",
            code: 503,
            status: false,
            message: "Server Maintenance!"
        })
    }
})

const ttsLontong = () => new Promise(async (resolve, reject) => {
    try {
        let response = await (await fetch('https://raw.githubusercontent.com/plengeh69/database/main/games/caklontong.json')).json()
        let res = response[Math.floor(Math.random() * response.length)]
        resolve({
            creator: "Arjn",
            code: 200,
            status: true,
            result: {
                soal: res.soal,
                jawaban: res.jawaban,
                deskripsi: res.deskripsi
            }
        })
    } catch (err) {
        console.error(err)
        reject({
            creator: "Arjn",
            code: 503,
            status: false,
            message: "Server Maintenance!"
        })
    }
})

const asahOtak = () => new Promise(async (resolve, reject) => {
    try {
        let resp = await (await fetch('https://raw.githubusercontent.com/plengeh69/database/main/games/asahotak.json')).json()
        let res = resp[Math.floor(Math.random() * resp.length)]
        resolve({
            creator: "Arjn",
            code: 200,
            status: true,
            result: {
                soal: res.soal,
                jawaban: res.jawaban
            }
        })
    } catch (err) {
        console.error(err)
        reject({
            creator: "Arjn",
            code: 503,
            status: false,
            message: "Server Maintenance!"
        })
    }
})

const isTg = () => new Promise(async (resolve, reject) => {
    var baseURI = 'https://jawabantebakgambar.net'
        var random = Crypto.randomInt(0, 2000)

        Axios.get(baseURI + '/id-' + random + '.html').then(res => {
            const $ = cheerio.load(res.data)
            const img = $('div.content > ul.images').find('img').attr('src')
            const jwb = $('div.content > ul.images').find('img').attr('alt').replace('Jawaban ', '')
            const petunjuk = jwb.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')

            request(`https://tinyurl.com/api-create.php?url=${baseURI + img}`, function(err, resu, body) {
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result: {
                        image: body,
                        jawaban: jwb,
                        petunjuk: petunjuk
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

const susunKata = () => new Promise(async (resolve, reject) => {
    try {
        let response = await (await fetch('https://raw.githubusercontent.com/plengeh69/database/main/games/susunkata.json')).json()
        let res = response[Math.floor(Math.random() * response.length)]
        resolve({
            creator: "Arjn",
            code: 200,
            status: true,
            result: {
                soal: res.soal,
                type: res.tipe,
                jawaban: res.jawaban
            }
        })
    } catch (err) {
        console.error(err)
        reject({
            creator: "Arjn",
            code: 503,
            status: false,
            message: "Server Maintenance!"
        })
    }
})

const tekaTeki = () => new Promise(async (resolve, reject) => {
    try {
        let response = await (await fetch('https://raw.githubusercontent.com/plengeh69/database/main/games/tekateki.json')).json()
        let res = response[Math.floor(Math.random() * response.length)]
        resolve({
            creator: "Arjn",
            code: 200,
            status: true,
            result: {
                soal: res.soal,
                jawaban: res.jawaban
            }
        })
    } catch (err) {
        console.error(err)
        reject({
            creator: "Arjn",
            code: 503,
            status: false,
            message: "Server Maintenance!"
        })
    }
})

module.exports = {
    family,
    ttsLontong,
    asahOtak,
    isTg,
    susunKata,
    tekaTeki
}