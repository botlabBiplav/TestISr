// app/page.js
"use client";

import App from "./App"; // Adjust the import according to your structure
import endpointData from "./api/endpointData";
import Herocard from "./src/components/Home/Herocard";
import Background from "./src/components/Background/Background";
import StoryPage from "./src/components/Home/StoryPage";
import { revalidatePath } from "next/cache";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
// Fetch data from your API with ISR
// here we are implemented the isr on-demand revalidation using webhook
const fetchData = async (endpoint) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
     next: { tags: ['posts'] }, 
     cache: 'no-store',
    // next: {
    //   revalidate: 60, // Revalidate every 60 seconds
    // },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const data = await res.json();
  return data.data;
};

const fetchAppData = async () => {
  const [hero, story] = await Promise.all([
    fetchData(endpointData.heroSection),
    fetchData(endpointData.storyPage),
  ]);

  return { hero, story };
};

export default async function Home() {
  const { hero, story } = await fetchAppData();

  console.log(story,'herosectiondata')

  return (
    <main>
      <div className="z-10">
        <Background />
        <Herocard getData={hero} />
        <StoryPage getData={story} />
      </div>
    </main>
  );
}
