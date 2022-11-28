// const { yta } = require('../y2mate')
const { ytMp3 } = require('../youtube')
const yts = require('yt-search')
const { bitly } = require('./shorturl')

/* const ytPlay = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let json = await yts(query)
            let yt = json.all.find(video => video.seconds < 3600)
		    let response = await yta(yt.url)

            request(`https://tinyurl.com/api-create.php?url=${response.dl_link}`, function(err, resu, body) {
                resolve({
                    creator: "@arjn.me",
                    code: 200,
                    status: true,
                    result: {
                        title: response.title,
                        description: yt.description,
                        thumbnail: yt.thumbnail,
                        views: yt.views,
                        duration: yt.timestamp,
                        published: yt.ago,
                        filesize: response.filesizeF,
                        downloadUrl: body
                    }
                })
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
} */

const ytPlay = (query) => new Promise((resolve, reject) => {
    yts(query)
        .then(async (response) => {
            let res = response.videos.slice(0, 5)
            let result = []
            for (let i = 0; i < res.length; i++) {
                result.push(res[i])
            }
            let yt = await ytMp3(result[0].url)
            let short = await bitly(yt.result.dl_link)
            resolve({
                creator: '@arjn.me',
                code: 200,
                status: true,
                result: {
                    title: result[0].title,
                    description: result[0].description,
                    thumbnail: result[0].thumbnail,
                    views: parseInt(result[0].views),
                    duration: result[0].timestamp,
                    published: result[0].ago,
                    filesize: yt.result.filesize,
                    downloadUrl: short.result.link
                }
            })
        })
})

module.exports = ytPlay