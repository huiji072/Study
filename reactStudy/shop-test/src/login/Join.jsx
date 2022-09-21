import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Join.css';


function Join() {

  const [ testStr, setTestStr ] = useState('');
  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  // function join(e){
  //   e.preventDefault();
  // }

  const checkData = [
    {id: 0, title: '기부자', name: 'chkseller'},
    {id: 1, title: '일반회원', name: 'chkbuyer'}
  ];

  const [checkItems, setCheckItems] = useState("");

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  }

  const joinData = {
    name: name,
    email: email,
    password: password,
    address: address
  }
const jsonData = JSON.stringify(joinData)

const join = (e) => {
  e.preventDefault();
  axios({
    url: '/members/new2',
    method: "post",
    body: jsonData,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  }).then((res) => {
    callback(res.data);
    console.log(res.data);
  }).catch((error) => {
    console.log(error);
  })
  console.log(jsonData)
  console.log("sending Join Request");
}

return(
  <div class="joinContainer">
    <h2 class="mb-4">회원가입</h2>
      <form class="JoinForm" onSubmit={join} object={joinData}>

        <div className='form-group'>
        {checkData?.map((data, key) => (
          <tr key={key}>
            <td>
              <input type='checkbox' 
                onChange={(e) => handleSingleCheck(e.target.checked, data.id)}
                // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                checked={checkItems.includes(data.id) ? true : false} 
                value={data.name}/>
            </td>
            <td className='custom-control-label'>{data.title}</td>
          </tr>
        ))}
        </div>

          {/* <div class="form-group">
          <input type="checkbox" id="chkseller" name="chkseller" className="custom-control-input" />
          <label className="custom-control-label">기부자</label>
          <br/>
          <input type="checkbox" id="chkbuyer" name="chkbuyer" className="custom-control-input"/>
          <label className="custom-control-label">일반회원</label>
          </div> */}

          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={handleChangeName}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter address"
              value={address}
              onChange={handleChangeAddress}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary"
             >
              Submit
            </button>
          </div>
        </form>
  </div>
);        
}

export default Join;