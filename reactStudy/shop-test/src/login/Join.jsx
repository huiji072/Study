import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './Join.css';


function Join() {

  const [ testStr, setTestStr ] = useState('');
  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  function joinNew(e){
    e.preventDefault();
  }

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

  let sellerid=''
  let buyerid=''
  const handleCheckboxSeller = (event) => {
    if(event.target.checked){
      sellerid = event.target.value;
      console.log(sellerid);
    }else{
      sellerid = ''
      console.log(sellerid);
    }
  }

  const handleCheckboxBuyer = (event) => {
    if(event.target.checked){
      buyerid = event.target.value;
      console.log(buyerid);
    }else{
      buyerid = ''
      console.log(buyerid);
    }
  }


  const joinData = {
    name: name,
    email: email,
    password: password,
    address: address
  }
const jsonData = JSON.stringify(joinData)

const sendJoinRequest = () => {
  axios({
    url: '/members/new',
    method: "post",
    headers: { 'Content-Type': 'application/json' },
    data: jsonData,
    params: {
      checkSeller: sellerid,
      checkBuyer: buyerid
    }
  }).then((res) => {
    callback(res.data);
  }).catch((error) => {
    console.log(error);
  })
  console.log(jsonData)
  console.log("sending Join Request");
}


return(
  <div class="joinContainer">
    <h2 class="mb-4">회원가입</h2>
      <form class="JoinForm" onSubmit={joinNew} object={joinData}>

      <div className='form-group'>
        <input onChange={handleCheckboxSeller} type='checkbox' name='chkseller' value='chkseller' className="custom-control-input"/>
        <label className="custom-control-label">기부자</label>
          <br/>
          <input onChange={handleCheckboxBuyer} type='checkbox' name='chk' value='chkbuyer'className="custom-control-input"/>
        <label className="custom-control-label">일반회원</label>
        </div>

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
            onClick={() => sendJoinRequest()}
             >
              Sign up
            </button>
          </div>
        </form>
  </div>
);        
}

export default Join;