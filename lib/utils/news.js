const { default: Axios } = require('axios')
const fetch = require('node-fetch')
const config = require('../../config.json')
const request = require('request')

const newsRes = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`http://newsapi.org/v2/top-headlines?country=id&pageSize=5&apiKey=${config.newsApi}`)
            const json = await response.json()
            const article = json.articles
            let result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: article[i].title,
                    author: article[i].author,
                    description: article[i].description,
                    image: article[i].urlToImage,
                    published: article[i].publishedAt.replace('T', ' ').replace('Z', ''),
                    source: article[i].url
                })
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result
                })
            }
        } catch (err) {
            reject({
                creator: "Arjn",
                code: 503,
                status: false,
                message: "Server maintenance!"
            })
        }
    })
}

module.exports = newsRes