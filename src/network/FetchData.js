import axios from "axios";

const fetchData = async (endPoint) => {

    try {
        const response = await axios.get(`https://api.imgflip.com/${endPoint}`)
        return response.data
    } catch (err) {
        console.log(err)
    }

}

export default fetchData