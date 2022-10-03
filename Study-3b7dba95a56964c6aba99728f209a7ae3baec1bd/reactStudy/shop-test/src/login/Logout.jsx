import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Logout() {

    axios({
        url: '/members/logout',
        method: 'get'
      }).then((res) => {
        console.log(res.data);
        window.location.href = "/";
      }).catch((error) => {
        console.log(error);
      })


}

export default Logout;