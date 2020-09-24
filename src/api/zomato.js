import axios from "axios";

export default axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1/",
    headers: {
        "user-key": "669ee211519e1b071423065f78783efb",
        "content-type": "applicatipon/json",
    },
});
