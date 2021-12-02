import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetUserData = (props) => {
  //const [userData, setUserData] = useState({});
  const userData = {
    username : "eshasah",
    first_name :"Esha",
    last_name : "Sah",
    email_id : "esha8sah@gmail.com",
    country : "USA",
    contact_number : "+1(876)543-1234",
    auth_id : 0,
  };

  

  // useEffect(() => {
    
    // console.log("userName" + username);
    // if(username){
    //   var token = localStorage.getItem("token");
      
    //   var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");
    //     myHeaders.append("Authorization", "Bearer " + token);

    //     var raw = JSON.stringify({
    //     "username": localStorage.getItem("userName")
    //     });

    //     var requestOptions = {
    //     method: 'GET',
    //     headers: myHeaders,
    //     body: raw,
    //     mode: 'cors'
    //     };

    //     fetch('http://localhost:8080/api/users/get-user-details?userName=' + username, requestOptions)
    //     .then(async response => {
    //       const resData = await response.json();

    //       if(!response.ok){
    //         // get error message from body or default to response statusText
    //         const error = (resData && resData.message) || response.statusText;
    //         return Promise.reject(error);
    //       }
    //       localStorage.setItem("userData", resData)

    //     })
    //     .catch(error => {
    //       //this.setState({ errorMessage: error.toString() });
    //       console.error('There was an error!', error);
    //   });
    // }
  //}, []);

  return { userData };
};


export function getUserData (props) {

  var username = localStorage.getItem("userName");
 
    console.log("userName" + username);
    if(username){
      var token = localStorage.getItem("token");
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + token);

        var raw = JSON.stringify({
        "username": localStorage.getItem("userName")
        });

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        body: raw,
        mode: 'cors'
        };

        return fetch('http://localhost:8080/api/users/get-user-details?userName=' + username, requestOptions)
        .then(async response => {
          const resData = await response.json();

          if(!response.ok){
            // get error message from body or default to response statusText
            const error = (resData && resData.message) || response.statusText;
            return Promise.reject(error);
          }
          debugger;
          localStorage.setItem("userData", resData.role);
          console.log(resData.role);

        })
        .catch(error => {
          //this.setState({ errorMessage: error.toString() });
          console.error('There was an error!', error);
      });
    }
};


export const useGetMileageData = (props) => {
  const [userData, setUserData] = useState({});
  const { userName } = useParams();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    setUserData({
      username : userName,
      first_name :"Esha",
      last_name : "Sah",
      mileage_points : 978,
      reward_number : 345678,
      number_of_trips : 27,

  });
    // axios.get("http://localhost:3001/user/get" + userName).then((response) => {
    //     if (response.data.loggedIn === true) {
    //       setUserData(response.data.user);
    //     } else {
    //       setUserData({});
    //     }
    // });
  }, [userName]);

  return { userData };
};

export const useUserAuthenticate = (username, password) => {
  
}