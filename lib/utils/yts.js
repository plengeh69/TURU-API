const yts = require('yt-search')

const ytSearch = (query) => {
    return new Promise(async (resolve, reject) => {
        yts(query)
            .then((resp) => {
                const res = resp.all.slice(0, 10)
                const data = res.length
                let result = [];
                for (let i = 0; i < data; i++) {
                    const id = res[i].videoId
                    const judul = res[i].title
                    const desc = res[i].description
                    const piew = res[i].views
                    const durasi = res[i].timestamp
                    const author = res[i].author.name
                    const thumb = res[i].thumbnail
                    const link = res[i].url
                    const upload = res[i].ago
                    result.push({
                        id: id,
                        title: judul,
                        duration: durasi,
                        views: piew,
                        description: desc,
                        thumbnail: thumb,
                        channel: author,
                        published: upload,
                        url: link
                    })
                }
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result
                })
            })
            .catch((err) => {
                console.error(err)
                reject({
                    creator: "Arjn",
                    code: 503,
                    status: false,
                    message: "Server Maintenance!"
                })
            })
    })
}

module.exports = ytSearch