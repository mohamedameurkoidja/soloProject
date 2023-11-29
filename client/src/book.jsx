// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { MdOutlineWbIncandescent } from "react-icons/md";


const Render = (props) => {
  const [price, setPrice] = useState(0);
  return (
    <div className="books-container">
      
      <div></div>
      {props.book.map((ele, i) => {
        return (
          <div key={i} className="book">
            <img
              onClick={() => props.handelchangeDescptionBook()}
              src={ele.Image}
              alt={`Cover of ${ele.title}`}
              className="book-cover"
            />
            <div className="book-details">
              <h3>{ele.title}</h3>
              <p> Price: {ele.prix}</p>
              <button
                className="delete"
                onClick={() => props.DeleteBook(ele._id)}
              >
                Delete
              </button>
              <input
                className="up"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
              />
              <button
                className="updete"
                onClick={() =>
                  props.UpdeteBook(ele._id, {
                    prix: price,
                  })
                }
              >
                Updete
              </button>
            </div>
          </div>
        );
      })}
      <div>
      <MdOutlineWbIncandescent className="newpost" onClick={() => props.handelchangedescption()} />

       
      </div>
    </div>
  );
};

export default Render;
