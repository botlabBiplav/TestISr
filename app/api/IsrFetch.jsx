import { useEffect, useState } from "react";
import axios from "axios";


// This is not isr we need to implement as we are using the useEffect for data loading and also we are not using the next : revalidation here 

const IsrFetch = (endpoints) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_URL}${endpoints}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 20 },
        // Note: Axios does not support the `next` option directly.
        // You'll need to handle revalidation on the Next.js side.
      });

      setData(res.data.data);
    } catch (err) {
      setError(err.response ? err.response.data : err.message);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 20 * 1000);

    return () => clearInterval(intervalId);
  }, [endpoints]); // Including endpoints as a dependency

  return { data, error };
};

export default IsrFetch;
