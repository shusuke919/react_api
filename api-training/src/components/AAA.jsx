
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// routerインストール済み
const AAA = ({booksName, getApi}) => {
  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = getApi?.(booksName).then((response) =>
    setBookData(response));
  } ,[booksName, getApi]);

  return (
   <ul>
     {bookData?.data.items.map((val, index) => (
        <li key={index}>{val.volumeInfo.title}</li>
     ))}
   </ul>
     )
}

export default AAA
