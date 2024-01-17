import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function getPost() {
      // console.log("fetch!");
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          { signal: signal }
        );
        // console.log("response: ", response);
        const data = await response.json();
        // console.log("data: ", data);
        setPosts(data);
      } catch (error) {
        console.log("error: ", error);
      } finally {
        // console.log("Fetch Finished!");
      }
    }

    getPost();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const onScrollLogging = () => {
      console.log(document.body.getBoundingClientRect());
    };

    window.addEventListener("scroll", onScrollLogging);

    return () => window.removeEventListener("scroll", onScrollLogging);
  }, []);

  const onAddPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
    });

    const data = await response.json();
    // console.log("data: ", data);

    setPosts((posts) => [data, ...posts]);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          margin: "8px 0",
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "25%",
          margin: "8px 0",
        }}
      >
        <label htmlFor="">Body</label>
        <input
          id="body"
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button onClick={onAddPost}>+ ADD POST</button>

      {posts.map(function (post) {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
