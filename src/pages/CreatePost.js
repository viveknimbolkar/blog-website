import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
export default function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");
  let navigate = useNavigate();
  // send date to firestore
  const postsCollectionRef = collection(db, "posts"); // get collection list
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div>
        <label>Title</label>
        <input onChange={(e) => setTitle(e.target.value)} type="test" />
      </div>
      <div>
        <label>post</label>
        <textarea onChange={(e) => setPost(e.target.value)} row="10" col="50" />
      </div>
      <button onClick={createPost}>Submit Post</button>
    </div>
  );
}
