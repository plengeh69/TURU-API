const { ytMp4 } = require('../youtube')
const { tinyurl } = require('./shorturl')


const ytmp4 = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
		    const response = await ytmp4(url)
            let { result } = await tinyurl(response.result.dl_link)

            resolve({
                creator: '@arjn.me',
                code: 200,
                status: true,
                result: {
                    title: response.result.title,
                    thumbnail: response.result.thumb,
                    channel: response.result.channel,
                    filesize: response.result.filesize,
                    downloadUrl: result
                }
            })

            
        } catch (err) {
            console.log(err)
            reject({
                creator: "Arjn",
                code: 503,
                status: false,
                message: "Server Maintenance!"
            })
        }
    })
}

module.exports = ytmp4