
export const cacheMiddleware = (context: any, next: any) => {
//     const start = Date.now();

//     if (context.locals.runtime.env.DISABLED_CACHE) {
//       return next();
//     }
  
//     //only attempt to retrieve cache on urls starting with /api
//     if (!context.url.pathname.startsWith("/api")) {
//       return next();
//     }
  
//     //ignore route with auth, cacheRequests, and kv
//     if (
//       context.url.pathname.startsWith("/api/v1/auth") ||
//       context.url.pathname.startsWith("/api/v1/cacheRequests") ||
//       context.url.pathname.startsWith("/api/v1/kv") ||
//       context.url.pathname.startsWith("/api/v1/admin")
//     ) {
//       return next();
//     }
  
//     //   console.log("Handling KV Cache");
  
//     const cachedData = await kvGet(context, context.url.href);
  
//     if (cachedData) {
//       const end = Date.now();
//       const executionTime = end - start;
//       cachedData.executionTime = executionTime;
//       cachedData.source = "KV";
//       return new Response(JSON.stringify(cachedData), {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       });
//     } else {
//       console.log("Cache miss on " + context.url.href);
//       //add url to cache request
      
//       cacheRequestInsert(
//         context,
//         context.locals.runtime.env.D1,
//         context.locals.runtime.env.KV,
//         context.url.href 
//       );
//     }
  
//     return next();
//   };
};