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
  const createPost = async (e) => {
    e.preventDefault();
    if (!title || !post) {
      alert("Empty field not allowed");
      return;
    }
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
    <div className="container row mt-4">
      <div className="col-md-4"></div>
      <div className="col-md-6">
        <div class="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label">
            Blog Title
          </label>
          <input
            required
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter blog title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Blog Content
          </label>
          <textarea
            required
            onChange={(e) => setPost(e.target.value)}
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button className="btn mt-3 btn-success" onClick={createPost}>
            Submit Post
          </button>
        </div>
      </div>
    </div>
  );
}
