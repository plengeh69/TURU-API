const { yta } = require('../y2mate')
const request = require('request')


const ytmp3 = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
		    const response = await yta(url)

            request(`https://tinyurl.com/api-create.php?url=${response.dl_link}`, function(err, resu, body) {
                resolve({
                    creator: "@arjn.me",
                    code: 200,
                    status: true,
                    result: {
                        title: response.title,
                        thumbnail: response.thumb,
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
}

module.exports = ytmp3