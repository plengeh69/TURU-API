const ytdl = require('ytdl-core')
const axios = require('axios')

async function byteToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
        if (bytes === 0) return "n/a"
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
        if (i === 0) resolve(`${bytes} ${sizes[i]}`)
        resolve(`${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`);
    })
}

const ytMp4 = (url) => new Promise((resolve, reject) => {
    ytdl
        .getInfo(url)
        .then(async (response) => {
            let result = []
            for (let i = 0; i < response.formats.length; i++) {
                let item = response.formats[i]
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let { qualityLabel, contentLength, approxDurationMs } = item
                    let bytes = await byteToSize(contentLength)
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes
                    }
                }
            }
            let resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined)
            let dl_link = resultFix[0].video
            let title = response.videoDetails.title
            let desc = response.videoDetails.description
            let views = parseInt(response.videoDetails.viewCount || 0)
            let likes = response.videoDetails.likes
            let dislike = response.videoDetails.dislikes
            let channel = response.videoDetails.ownerChannelName
            let upload = response.videoDetails.uploadDate
            let thumb = response.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url

            resolve({
                creator: '@arjn.me',
                code: 200,
                status: true,
                result: {
                    dl_link,
                    title,
                    views,
                    filesize: resultFix[0].size,
                    likes,
                    dislike,
                    channel,
                    upload,
                    thumb,
                    desc
                }
            })
        })
        .catch(reject)
})

const ytMp3 = (url) => new Promise((resolve, reject) => {
    ytdl
        .getInfo(url)
        .then(async (response) => {
            let result = []
            for (let i = 0; i < response.formats.length; i++) {
                let item = response.formats[i]
                if (item.mimeType == 'audio/webm; codecs="opus"') {
                    let { contentLength, approxDurationMs } = item
                    let bytes = await byteToSize(contentLength)
                    result[i] = {
                        audio: item.url,
                        size: bytes,
                        // duration: formated(parseInt(approxDurationMs)),
                    }
                }
            }
            let resultFix = result.filter(
                (x) => x.audio != undefined && x.size != undefined
            )
            let dl_link = resultFix[0].audio
            let title = response.videoDetails.title
            let desc = response.videoDetails.description
            let views = parseInt(response.videoDetails.viewCount || 0)
            let likes = response.videoDetails.likes
            let dislike = response.videoDetails.dislikes
            let channel = response.videoDetails.ownerChannelName
            let upload = response.videoDetails.uploadDate
            let thumb = response.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url

            resolve({
                creator: '@arjn.me',
                code: 200,
                status: true,
                result: {
                    title,
                    dl_link,
                    filesize: resultFix[0].size,
                    // duration: resultFix[0].duration,
                    thumb,
                    views,
                    likes,
                    dislike,
                    channel,
                    upload,
                    desc,
                  },
            })
        })
        .catch(reject)
})

module.exports = {
    ytMp4,
    ytMp3
}