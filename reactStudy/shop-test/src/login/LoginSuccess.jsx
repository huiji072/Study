import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Main from '../main/Main';

function LoginSuccess() {

    const [ testStr, setTestStr ] = useState('');
    // 변수 초기화
    function callback(str) {
      setTestStr(str);
    }

    useEffect(
        () => {
          axios({
              url: '/members/login/success',
              method: 'post',
              body: JSON.stringify("postTest"),
              headers: { 'Content-Type': 'application/json' }
          }).then((res) => {
              callback(res.data);
          })
        }, []
    );
    
  return(
    <>
    <h1>test</h1>
    <h2>{testStr}</h2>
    {/* <Main></Main> */}
    </>
);      
}

export default LoginSuccess;