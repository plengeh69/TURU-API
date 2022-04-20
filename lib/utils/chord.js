const { default: Axios } = require('axios')
const { htmlToText } = require('html-to-text')

const chordRes = (query) => {
    return new Promise(async (resolve, reject) => {
        Axios.get(`http://app.chordindonesia.com/?json=get_search_results&exclude=date,modified,attachments,comment_count,comment_status,thumbnail,thumbnail_images,author,excerpt,content,categories,tags,comments,custom_fields&search=${query}`)
        .then((resp) => {
            Axios.get(`http://app.chordindonesia.com/?json=get_post&id=${resp.data.posts[0].id}`)
            .then((resu) => {
                const anune = resu.data.post.content
                const hasil = htmlToText(anune, {
                    wordwrap: 130
                })
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result: hasil
                })
            })
            .catch((e) => reject({ creator: "Arjn", code: 503, status: false, message: "Server maintenance!" }))
        })
        .catch((err) => reject({ creator: "Arjn", code: 503, status: false, message: "Server maintenance!" }))
    })
}

module.exports = chordRes