import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7cfed166c70a453f905cea0a2dbe1357'
  }
})
