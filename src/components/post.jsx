import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const result = await axios.get(`${apiEndpoint}`);
      setPosts(result.data);
    }

    try {
      getPosts();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(`${apiEndpoint}`, obj);

    const newArray = [post, ...posts];
    setPosts(newArray);
  };

  const handleUpdate = async (post) => {
    post.title = "UPDATED";
    const { data: updatedPost } = await axios.put(
      `${apiEndpoint}/${post.id}`,
      post
    );

    const index = posts.indexOf(post);
    const copy = [...posts];
    copy[index] = updatedPost;

    setPosts(copy);
  };

  const handleDelete = async (post) => {
    const origianlPosts = posts;

    const copy = posts.filter((item) => item.id !== post.id);
    setPosts(copy);

    try {
      await axios.delete(`${apiEndpoint}/${post.id}`);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted");

      setPosts(origianlPosts);
    }
  };

  return (
    <div className="mt-12">
      <div>
        <button onClick={handleAdd} className="button text-white bg-blue-500">
          Add
        </button>
      </div>
      <ul className="mt-4">
        {posts.map((post, index) => (
          <li
            key={index}
            className="flex justify-between mt-2 border p-2 border-blue-400"
          >
            <p>{post.title.slice(0, 50)}</p>
            <div className="flex">
              <button
                onClick={() => handleUpdate(post)}
                className="button text-white bg-green-500"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(post)}
                className="button text-white bg-red-500 ml-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
