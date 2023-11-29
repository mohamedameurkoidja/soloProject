
import React, { useState } from "react";
import { CgAddR } from "react-icons/cg";
// import { FaHome } from "react-icons/fa";
const Post = ({ Postbook, Handelchange ,setView}) => {
  
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const handlePost = () => {
    Postbook({
      title: name,
      Image: image,
      prix: price,
    });
    window.location.reload()
  };

  return (
    <div>
    
      <button className="home" onClick={() => Handelchange()}>
        Home
      </button>
      <br />
      <input
        className="form__input "
        type="text"
        placeholder="Add Title"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        className="form__input "
        type="text"
        placeholder="Add src image"
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <input
        className="form__input "
        type="text"
        placeholder="Add Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <CgAddR className="post-book" onClick={handlePost} />
      {/* <button className="post" onClick={handlePost}>
        Post
      </button> */}
      <br />
    </div>
  );
};

export default Post;
