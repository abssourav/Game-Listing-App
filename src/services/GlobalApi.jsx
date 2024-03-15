import axios from "axios";

const axiosInstanceCreate = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

const fetchGenresList = async() =>{
    try {
        const res = await axiosInstanceCreate.get('/genres?key='+ import.meta.env.VITE_RWAG_KEY)
        return res.data
    } catch (error) {
        console.log("Fecthing GenreList Failed", error)
        throw error
    }

}
const allGamesList = async() =>{
    try {
        const res = await axiosInstanceCreate.get('/games?key='+ import.meta.env.VITE_RWAG_KEY)
        return res.data
    } catch (error) {
        console.log("Fecthing allGamesList Failed", error)
        throw error
    }

}


export {fetchGenresList,allGamesList}
