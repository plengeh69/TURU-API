// const { yta } = require('../y2mate')
const { ytMp3 } = require('../youtube')
const { tinyurl } = require('./shorturl')


const ytmp3 = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
		    const response = await ytMp3(url)
            let short = await tinyurl(response.result.dl_link)

            resolve({
                creator: '@arjn.me',
                code: 200,
                status: true,
                result: {
                    title: response.result.title,
                    thumbnail: response.result.thumb,
                    channel: response.result.channel,
                    filesize: response.result.filesize,
                    downloadUrl: short.result
                }
            })
        } catch (err) {
            console.log(err)
            reject({
                creator: "@arjn.me",
                code: 503,
                status: false,
                message: "Server Maintenance!"
            })
        }
    })
}

module.exports = ytmp3