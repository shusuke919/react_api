
import './App.css';
import AAA from './components/AAA';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {

   const getApi = async (word) => {
     const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
     const result = await axios.get(`${url}${word}`);
      return result;
   };
  const booksName = ["アンパン", "バイキンマン", "ドラえもん"];
  return (
     <BrowserRouter>
      <h1>お探しの本は何ですか</h1>
      <ul>
        <li>
          <Link to="/a">アンパンマン</Link>
        </li>
        <li>
          <Link to="/b">バイキンマン</Link>
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

      <input type="text"></input>
      <button>探す</button>
     </BrowserRouter>
      
    
    
  )
}

export default App;
