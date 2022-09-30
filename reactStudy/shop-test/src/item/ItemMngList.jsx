// import React, { useState, useEffect } from 'react';
// import axios from 'axios'
// import './ItemMng.css';


// function ItemMngList() {

//     const [ testStr, setTestStr ] = useState('');
//     // 변수 초기화
//     function callback(str) {
//       setTestStr(str);
//     }

//     useEffect(
//         () => {
//           axios({
//               url: '/item/itemMng',
//               method: 'GET'
//           }).then((res) => {
//               callback(res.data);
//               console.log(res.data);
//           })
//         }, []
//     );

//     return(
//         <>
//             {testStr.item && testStr.item.map((item) => {
//                 <li key={item.id}/>
//                 return(
//                         <tr>
//                             <td >{item.id}</td>
//                             <td>
//                                 <a href={'/item/update/'+item.id}>{item.name}</a>
//                             </td>
//                             <td>{item.stockNumber}</td>
//                             <td>{item.sellStatus}</td>
//                             <td>{item.createdBy}</td>
//                             <td>{item.regTime}</td>
//                         </tr>
//                 )
//             })}


//                     </>
//     )
// }

// export default ItemMngList;



