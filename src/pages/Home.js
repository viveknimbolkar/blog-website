import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

export default function Home() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc();
  };
  return (
    <div>
      <div class="container">
        <div class="row">
          {postLists.map((post) => {
            return (
              <div class="col-md-3 border m-1 ">
                <div className="text-primary">
                  <h2>@{post.title}</h2>
                </div>
                <div>
                  <p>{post.post}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {postLists.map((post) => {
        return <div class="col-md-3 border m-1">
            <div className="text-primary">
              <h2>@google</h2>
            </div>
            <div>
              <p>
                loreml ksdaf;lsj d;lk fsldkjf a;lsdf lksjdlfjsldjf lksdjfl
                ksjdlfk sldkf lskdj flsjdlfkjsldkfjlsd fls dlf sldjf lsd fl{" "}
              </p>
            </div>
          </div>;
      })} */}
    </div>
  );
}
