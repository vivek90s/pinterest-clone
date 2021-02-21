import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID t-G8wJZSRh6mnrHfgT187UHTNo8vYdxkh93yr3_yb44",
    }
})