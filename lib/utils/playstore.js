const scrap = require('playstore-scraper')
let result = []

const playstore = (name) => {
    return new Promise(async (resolve, reject) => {
        scrap
            .search(name)
            .then((res) => {
                for (let i = 0; i < res.results.length; i++) {
                    result.push({
                        title: res.results[i].title,
                        desc: res.results[i].description,
                        rating: res.results[i].rating,
                        developer: res.results[i].developer,
                        thumbnail: res.results[i].icon,
                        url: res.results[i].link
                    })
                    resolve({
                        creator: "Arjn",
                        code: 200,
                        status: true,
                        result
                    })
                }
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

module.exports = playstore