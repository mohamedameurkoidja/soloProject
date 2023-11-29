import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Render from "./book.jsx";
import Post from "./Post.jsx";
import Search from "./search.jsx";
import Descption from "./Descption.jsx";
import DescptionBook from "./descptionbook.jsx";

function App() {
  const [book, setBook] = useState([]);
  const [count, setCount] = useState(0);
  const [view, setView] = useState("home");
  const [name, setName] = useState("");


const handleCount = ()=>{
setCount(count +1 )
}


  useEffect(() => {
    getData();
  }, [count]);
  const getData = async () => {
    axios
      .get("http://localhost:8080/api/book")
      .then((response) => {
        setBook(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const Handelchange = () => {
    setView("home");
  };
  const handelchangeDescptionBook = () => {
    setView("descptionBook");
  };

  const handelchange = () => {
    setView("post");
  };
  const handelchangedescption = () => {
    setView("descption");
  };

  const DeleteBook = async (id) => {
    axios.delete(`http://localhost:8080/api/book/${id}`).then((response) => {
      setCount(count + 1);
      console.log(response);
    });
  };

  const UpdeteBook = async (id, body) => {
    console.log(body);
    axios.put(`http://localhost:8080/api/book/${id}`, body).then((response) => {
      setCount(count + 1);
      console.log(response);
    });
  };
  const Postbook = async (body) => {
    axios.post("http://localhost:8080/api/book", body).then((response) => {
      setBook(response.data);
    });
  };
  const getBook = (title) => {
    axios
      .get(`http://localhost:8080/${title}`)
      .then((response) => {
        setBook([response.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Search  getBook={getBook} />
      {view === "post" && (
        <Post Postbook={Postbook} Handelchange={Handelchange}   />
      )}
      <button className="button-91" onClick={() => handelchange()}>
        Post Book
      </button>
      {view === "home" && (
        <Render
          book={book}
          DeleteBook={DeleteBook}
          UpdeteBook={UpdeteBook}
          handelchangedescption={handelchangedescption}
          handelchangeDescptionBook={handelchangeDescptionBook}
        
        />
      )}
      {view === "descption" && <Descption Handelchange={Handelchange} />}
      {view === "descptionBook" && (
        <DescptionBook Handelchange={Handelchange} />
      )}
      <footer className="aaa">
        <h1>books Hub</h1>
     <h1> <a href="mailto:bookshub.com">http//bookshub.com</a></h1>
      </footer>
    </div>
  );
}

export default App;
