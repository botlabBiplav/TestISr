// app/api/getData.js
export async function getData() {
    const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
    const res = await fetch("http://localhost:1337/api/scroll-animations?populate=*", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const resdata = await res.json();
    return resdata.data; // Make sure this is the data structure you need
  }
  