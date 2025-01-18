export default function isValidUrl(urlString) {
    try {
        const url = new URL(urlString);
        return Boolean(url.protocol && url.hostname);
    } catch (e) {
        return false;
    }
}

// Example usage:
const validUrl1 = "https://www.example.com";
const validUrl2 = "http://localhost:3000";
const invalidUrl1 = "not a url";
const invalidUrl2 = "://invalid";

console.log(isValidUrl(validUrl1));
console.log(isValidUrl(validUrl2));
console.log(isValidUrl(invalidUrl1));
console.log(isValidUrl(invalidUrl2)); 