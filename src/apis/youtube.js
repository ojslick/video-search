import axios from "axios";

// const KEY = "AIzaSyDXa4FE1HDIgPSWD5DGcBW9kbuQtzih2_M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
