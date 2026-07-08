import axios from "axios";

class JikanService {
    constructor() {
        
        this.apiUrl = "https://api.jikan.moe/v4";
    }

    async getAnimeByGenre(genreId) {
        const response = await axios.get(`${this.apiUrl}/anime?genres=${genreId}`);
        
        return response.data.data.slice(10); 
    }

    async getAnimeBySeason(year, season) {
        const response = await axios.get(`${this.apiUrl}/seasons/${year}/${season}`);
        return response.data.data;
    }

    async getAnimeDetail(id) {
        const response = await axios.get(`${this.apiUrl}/anime/${id}`);
        return response.data.data;
    }

    async getRandomAnime() {
        const response = await axios.get(`${this.apiUrl}/random/anime`);
        return response.data.data;
    }

    async searchAnime(query) {
        const response = await axios.get(`${this.apiUrl}/anime?q=${query}`);
        return response.data.data;
    }
}

export default new JikanService();