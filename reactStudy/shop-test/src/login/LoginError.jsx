// import React, { useState, useEffect } from 'react';
// import axios from 'axios'

// function LoginError() {

//     const [ testStr, setTestStr ] = useState('');
//     // 변수 초기화
//     function callback(str) {
//       setTestStr(str);
//     }

//     useEffect(
//         () => {
//           axios({
//               url: '/members/login/error',
//               method: 'GET'
//           }).then((res) => {
//               callback(res.data);
//           })
//         }, []
//     );

//     return(
//         <>
//             <h1>{testStr}</h1>
//        </>
//     )
// }

// export default LoginError;