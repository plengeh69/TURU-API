const igeh = require('instatouch')
const request = require('request')
const options = {
    count: 0,
    mediaType: 'all',
	timeout: 0,
    session: "sessionid=48843380143%3AoTEbLM8PIWJf7u%3A5"
};

const igdl = (url) => {
    return new Promise(async (resolve, reject) => {
        try {
            igeh.getPostMeta(url, options)
                .then(data => {
                    request(`https://tinyurl.com/api-create.php?url=${data.graphql.shortcode_media.display_url}`, function (err, res, body) {
                        resolve({
                            creator: "Arjn",
                            code: 200,
                            status: true,
                            result: {
                                caption: data.graphql.shortcode_media.edge_media_to_caption.edges[0].node.text,
                                url: body
                            }
                        })
                    })
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
}

module.exports = igdl