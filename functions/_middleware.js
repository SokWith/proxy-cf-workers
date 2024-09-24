//export async function onRequestGet(context) {
//  return context.env.PROXYWEB.fetch(context.request);
//}

export async function onRequestOptions(context) {
  const headers = new Headers();
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  headers.set('Access-Control-Max-Age', '86400'); // 24 hours

  return new Response(null, { headers });
}

export async function onRequest(context) {
  const response = await context.env.PROXYWEB.fetch(context.request);
  const newResponse = new Response(response.body, response);

  newResponse.headers.set('Access-Control-Allow-Origin', '*');
  newResponse.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  newResponse.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return newResponse;
}
