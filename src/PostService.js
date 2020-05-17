import axios from 'axios';

const url = '/api/posts';

class PostService {
  // Get PostService
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch(err) {
        reject(err);
      }
    });
  }

  // Create Post
  static insertPost(text, name, pathName) {
    return axios.post(url, {
      text: text,
      name: name,
      pathName: pathName
    });
  }

}

export default PostService;
