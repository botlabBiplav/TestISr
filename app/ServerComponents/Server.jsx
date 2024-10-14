import { getData } from "../api/ApiData";

export default async function Server() {
  const data = await getData();
  console.log(data[0].attributes, 'dataFind');

  return (
    <main>
      <div className="h-screen bg-green-50">
        {data?.map((item, index) => (
          <div key={index}>
            <div className="text-white">dfs</div>
            {/* <h1>{item?.attributes?.name}</h1> */}
          </div>
        ))}
      </div>
    </main>
  );
}
