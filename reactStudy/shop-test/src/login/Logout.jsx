import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Logout() {

    axios({
        url: '/members/logout',
      }).then((res) => {
        alert("로그아웃 되었습니다.")
        console.log(res.data);
        window.location.href = "/";
      }).catch((error) => {
        console.log("error !!");
        console.log(error);
      })


}

export default Logout;