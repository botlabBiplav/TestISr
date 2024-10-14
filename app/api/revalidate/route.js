// // src/app/api/revalidate/route.js

// import { NextResponse } from "next/server";
// import { revalidateTag } from "next/cache";

// export async function POST(req) {
//     // Log incoming request headers for debugging
//     console.log(req.headers, "requestdata");

//     // Extract the webhook secret from headers
//     const secret = req.headers.get("webhook-secret");
//     console.log(secret, "secretdata");

//     // Validate the secret
//     if (!secret || secret !== process.env.REVALIDATION_SECRET) {
//         return NextResponse.json({ message: "Invalid token" }, { status: 401 });
//     }
//     const tag = "posts"; // Specify the tag to revalidate

//     const path = "/"; // Path to revalidate

//     try {
//         // Trigger revalidation by calling the method directly
//         // Note: As of now, you might need a specific revalidation logic here
        
//         // This is the crucial part to ensure proper revalidation
//         // Here, you'd typically notify your frontend or cache layer to re-fetch data
//         revalidateTag(tag); // Invalidate the cached data associated with the 'posts' tag

//         console.log(tag,'tagdatafound')

//         return NextResponse.json({ revalidated: true, tag }, { status: 200 });
        
//     } catch (err) {
//         console.error(err);
//         return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
//     }
// }


import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";


export async function POST(req) {
    const secret = req.headers.get("webhook-secret");

    if (!secret || secret !== process.env.REVALIDATION_SECRET) {
        return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // Use revalidateTag to invalidate cached data for the 'posts' tag
    try {
        await revalidateTag('posts'); // This would be the method if you're using Next.js with this capability.
        await NextResponse.revalidateTag('posts');

        return NextResponse.json({ revalidated: true, tag: 'posts' }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}
