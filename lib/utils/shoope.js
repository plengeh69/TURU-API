const axios = require('axios')
let result = [];

const shoope = (item) => {
    return new Promise(async (resolve, reject) => {
        await axios.request(`https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=${item}&limit=10&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2`, {
            method: "GET",
            data: null,
            headers: {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9,id;q=0.8",
                "if-none-match-": "55b03-856cd63f16112f8a43da6096f97ac3fe",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            }
        })
        .then(respon => {
            result.push(respon.data)
            resolve({
                creator: "Arjn",
                code: 200,
                status: true,
                result
            })
        })
        .catch((e) => {
            console.error(e)
            reject({
                creator: "Arjn",
                code: 503,
                status: false,
                message: "Server Maintenance!"
            })
        })
    })
}

module.exports = shoope