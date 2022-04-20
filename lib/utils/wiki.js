const wiki = require('wikipedia-tldr')
const request = require('request')

const wikiRes = (search) => {
    return new Promise(async (resolve, reject) => {
        wiki(search, 'id')
        .then(resp => {
            request(`https://tinyurl.com/api-create.php?url=${resp.thumbnail.source}`, function (err, res, body) {
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result: {
                        title: resp.title,
                        thumbnail: body,
                        description: resp.extract
                    }
                })
            })
        })
        .catch((err) => reject({ creator: "Arjn", code: 503, status: false, message: "Server maintenance!" }))
    })
}

module.exports = wikiRes