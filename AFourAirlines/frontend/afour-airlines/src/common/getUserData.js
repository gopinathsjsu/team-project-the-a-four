import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetUserData = (props) => {
  const [userData, setUserData] = useState({});
  const { userName } = useParams();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    setUserData({
      username : userName,
      first_name :"Esha",
      last_name : "Sah",
      email_id : "esha8sah@gmail.com",
      country : "USA",
      auth_id : 0,
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
      reward_number : 345678
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
