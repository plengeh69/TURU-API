const ucapanRes = () => {
    return new Promise(async (resolve, reject) => {
       try {
        var date = new Date();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var waktoo = date.getHours();
        switch(waktoo) {
            case 0: waktoo = "Tengah Malam🌚 "; break;
            case 1: waktoo = "Tengah Malam🌒 "; break;
            case 2: waktoo = "Dini Hari🌒 "; break;
            case 3: waktoo = "Dini Hari🌓 "; break;
            case 4: waktoo = "Subuh🌔 "; break;
            case 5: waktoo = "Subuh🌔 "; break;
            case 6: waktoo = "Pagi🌝 "; break;
            case 7: waktoo = "Pagi🌝 "; break;
            case 8: waktoo = "Pagi🌝 "; break;
            case 9: waktoo = "Pagi  "; break;
            case 10: waktoo = "Pagi🌞 "; break;
            case 11: waktoo = "Siang🌞 "; break;
            case 12: waktoo = "Siang🌞 "; break;
            case 13: waktoo = "Siang🌞 "; break;
            case 14: waktoo = "Siang🌞 "; break;
            case 15: waktoo = "Sore🌝 "; break;
            case 16: waktoo = "Sore🌝 "; break;
            case 17: waktoo = "Sore🌖 "; break;
            case 18: waktoo = "Magrib🌘 "; break;
            case 19: waktoo = "Magrib🌚 "; break;
            case 20: waktoo = "Malam🌚 "; break;
            case 21: waktoo = "Malam🌚 "; break;
            case 22: waktoo = "Malam🌚 "; break;
            case 23: waktoo = "Tengah Malam🌚 "; break;
        }
        resolve({
            creator: "Arjn",
            code: 200,
            status: true,
            result: waktoo
        })
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

module.exports = ucapanRes