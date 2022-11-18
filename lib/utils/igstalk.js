const igeh = require('instatouch')
const options = {
    count: 0,
    mediaType: 'all',
	timeout: 0,
    session: "ds_user_id=55355460533;sessionid=55355460533%3Aotv0XsAnDVBmpq%3A24%3AAYcZj88fZfkAdEol1knD9q0zgdgTlP9v8eg3OMFnHg"
};


const getUser = (username) => {
    return new Promise(async (resolve, reject) => {
        const user = username.replace(/@/gi, "")
        igeh.getUserMeta(user, options).then(data => {
            if (data == undefined) {
                reject("[!] User Not Found")
            } else {
                resolve({
                    creator: "Arjn",
                    code: 200,
                    status: true,
                    result: {
                        username: data.graphql.user.username,
                        full_name: data.graphql.user.full_name,
                        profile_pic_hd: data.graphql.user.profile_pic_url_hd,
                        is_private: data.graphql.user.is_private ? "Yes" : "No",
                        is_verified: data.graphql.user.is_verified ? "Yes" : "No",
                        is_business: data.graphql.user.is_business_account ? "Yes" : "No",
                        bio: data.graphql.user.biography,
                        follower: data.graphql.user.edge_followed_by.count,
                        following: data.graphql.user.edge_follow.count,
                        videotimeline: data.graphql.user.edge_felix_video_timeline.count,
                        timeline: data.graphql.user.edge_owner_to_timeline_media.count,
                        savedmedia: data.graphql.user.edge_saved_media.count,
                        collections: data.graphql.user.edge_media_collections.count,
                        post_count: data.graphql.user.edge_owner_to_timeline_media.count
                    }
                })
            }
        })
        .catch(() => reject({ creator: "Arjn", code: 404, status: false, message: "User tidak ditemukan!" }))
    })
}

module.exports = getUser
