import axios from "axios";

export const getImages = async (searchTem = "programming") =>
  await axios.get(`https://api.pexels.com/v1/search?query=${searchTem}`, {
    headers: {
      Authorization: "Oh6nfYXIuKXzlI5YzqcH0bZktCWiKjTC6QXw7Wjd5d796Sn5JsKQYWKJ",
    },
  });
