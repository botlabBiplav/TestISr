import React from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

const getUser = ({ getdata }) => {
  console.log(getdata, "thisdataweget");
  return (
    <div>
      {/* {getdata.map((item, index) => (
        <div key={index}></div>
      ))} */}
    </div>
  );
};

export async function getStaticProps() {
  const res = await axios.get(`${API_URL}/api/showreals/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const getdata = await res.json();

  console.log(getdata,'getting data value')

  return {
    props: {
      getdata,
    },
    revalidate: 10,
  };
}

export default getUser;
