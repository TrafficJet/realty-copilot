export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname === 'www.realtycopilot.app') {
    url.hostname = 'realtycopilot.app';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
