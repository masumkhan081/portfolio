export default function isValidUrl(urlString) {
  try {
    const url = new URL(urlString);
    return Boolean(url.protocol && url.hostname);
  } catch (e) {
    return false;
  }
}
