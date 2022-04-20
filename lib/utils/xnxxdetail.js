const fetch = require('node-fetch')
const cheerio = require('cheerio')
const request = require('request')

String.prototype.toReal = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return  hours + ':' + minutes + ':' + seconds;
}

const xdetail = (url) => {
    return new Promise(async (resolve, reject) => {
        fetch(url, { method: 'get' })
            .then(res => res.text())
            .then(res => {
                const $ = cheerio.load(res, {
                    xmlMode: false
                });
                const title = $('meta[property="og:title"]').attr('content');
                const duration = $('meta[property="og:duration"]').attr('content');
                const image = $('meta[property="og:image"]').attr('content');
                const videoScript = $('#video-player-bg > script:nth-child(6)').html();
                const urlVideo = videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1]
                request(`https://tinyurl.com/api-create.php?url=${urlVideo}`, function(err, resp, body) {
                    resolve({
                        creator: "Arjn",
                        code: 200,
                        status: true,
                        result: {
                            title: title,
                            duration: duration.toReal(),
                            thumbnail: image,
                            url: body
                        }
                    })
                })
            })
            .catch((err) => reject({ creator: "Arjn", code: 503, status: false, message: err}))
    })
}

module.exports = xdetail