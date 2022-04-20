const { yta } = require('../y2mate')
const yts = require('yt-search')
const request = require('request')

const ytPlay = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            let json = await yts(query)
            let yt = json.all.find(video => video.seconds < 3600)
		    let response = await yta(yt.url)

            request(`https://tinyurl.com/api-create.php?url=${response[0].link}`, function(err, resu, body) {
                resolve({
                    creator: "@arjn.me",
                    code: 200,
                    status: true,
                    result: {
                        title: response[0].judul,
                        description: yt.description,
                        thumbnail: yt.thumbnail,
                        views: yt.views,
                        duration: yt.timestamp,
                        published: yt.ago,
                        filesize: response[0].size,
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
}

module.exports = ytPlay