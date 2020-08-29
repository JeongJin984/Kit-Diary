import React, { useState, useEffect } from "react";
import { userAction } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";

const Nickname = (data) => {
  const userid = data.userid;
  console.log("Nickname data : " + userid);
  const [writerinfo, setWriterinfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction({ userid }));
    setWriterinfo(JSON.parse(sessionStorage.getItem("writerinfo")));
  }, []);

  return <>{Nickname}</>;
};

export default Nickname;
