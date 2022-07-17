
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
    {bookData === null ? (
      <p>now loading...</p>
    ) : (
      bookData.data.items.map((x, index) => (
        <li key={index}>{x.volumeInfo.title}</li>
      ))
    )}
  </ul>
    
  )
}

export default AAA
