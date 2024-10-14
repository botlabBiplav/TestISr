import React from 'react'



// const AnimationVideo = () => {
    
//   return (
//     <div className='text-white'>AnimationVideo</div>
//   )
// }

// export default AnimationVideo

//   export default async function Server() {
    
//     return(<>
//     <main>
//         <h1 className='text-white'> this is SSR </h1>
//     </main>
//         </>)
//   }


  export default function AnimationVideo ({videoUrl}){
    console.log(videoUrl,'videourldata');
    return (<>
    <main>
        <h1 className='text-white'>This is SSR rendering </h1>
        {/* <p>{videoUrl.name}</p> */}
    </main>
    </>)

  }

 
  export async function getServerSideProps() {
    const response = await fetch(`${API_URL}/api/scroll-animations?populate=*`);
    const result = response.json();
    console.log(result,'this is result');

      return {
        props: { videoUrl: { name: "default" } }, // Fallback data
      };
  }