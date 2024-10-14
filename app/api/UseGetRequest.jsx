import { useEffect, useState } from "react";
import axios from "axios";

const UseGetRequest = (endpoints) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(`${API_URL}${endpoints}`,{
          headers: { Authorization: `Bearer ${token}`},
        });
        setData(response.data.data);
      } catch (error) {
        setError(error);
        console.error(error, "there is some error");
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [API_URL,token,endpoints]);

  return { data, loading, error };
};

export default UseGetRequest;
