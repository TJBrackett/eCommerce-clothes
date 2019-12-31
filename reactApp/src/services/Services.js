import axios from "axios"

export const getImages = async () => {
    const images = await axios.get('https://jsonplaceholder.typicode.com/photos').then(({data}) => console.log(data))
    return images
}

// export const postVideos = async (curatorId) => {
//     const result = await axios.post(videoUrl, post_data).then(({data}) => data)
//     return result
// }