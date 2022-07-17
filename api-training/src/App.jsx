
import './App.css';
import AAA from './components/AAA';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import BBB from './components/BBB';
import CCC from './components/CCC';
import { useState } from 'react';

function App() {

  const [bookWord, setBookWord] = useState("");
  const [bookResult, setBookResult] = useState([]);

   const getApi = async (word) => {
     const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
     const result = await axios.get(`${url}${word}`);
      return result;
   };

   const getApi2 = (e) => {
    e.preventDefault();
    axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookWord}`)
    .then(res => {
      setBookResult(res.data.items)
      console.log(res)
    });
   };



  //  const getApi2 = async (e,word) => {
  //   e.preventDefault();
  //   const url2 = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
  //   const result2 = await axios.get(`${url2}${word}`);
  //    return result2;
  // };
  const booksName = ["アンパン", "コナン", "ドラえもん"];
  return (
     <BrowserRouter>
      <h1>お探しの本は何ですか</h1>
      <ul>
        <li>
          <Link to="/a">アンパンマン</Link>
        </li>
        <li>
          <Link to="/b">コナン</Link>
        </li>
        <li>
          <Link to="/c">ドラえもん</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/a" element={<AAA booksName={booksName[0]} getApi={getApi}/>}/>
        <Route path="/b" element={<AAA booksName={booksName[1]} getApi={getApi}/>}/>
        <Route path="/c" element={<AAA booksName={booksName[2]} getApi={getApi}/>}/>
      </Routes>
      <BBB setBookWord={setBookWord} getApi2={getApi2} bookWord={bookWord} bookResult={bookResult}/>
      <CCC />
     </BrowserRouter>
     
     
  )
}

export default App;
