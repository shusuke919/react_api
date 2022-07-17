import React from 'react'
import { useEffect } from 'react'

function BBB({bookResult, setBookWord, getApi2}) {

  useEffect(()=>{
    console.log('useEffectが実行されました')
  })
 
  
  return (
  <div>
    <h2>調べたい本を検索してください</h2>
    <form>
       <input 
       type="text"
       name='keyword'
       placeholder="ここに文字を入れてください"
       onChange={e => setBookWord(e.target.value)}
       ></input>
       <button type='submit' onClick={getApi2}>検索</button>

       <ul>
    {bookResult === null ? (
      <p>now loading...</p>
    ) : (
      bookResult.map((x, index) => (
        <li key={index}>{x.volumeInfo.title}</li>
      ))
    )}
  </ul>
       </form>

       </div>
       
  )
}

export default BBB
