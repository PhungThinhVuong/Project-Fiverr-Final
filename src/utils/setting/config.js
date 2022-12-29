const DOMAIN_API = "https://fiverr.cybersoft.edu.vn/api";
const TOKEN = "accessToken";
const USER_LOGIN = "USER_LOGIN";
const tokenByClass =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M";

function imgNotFound(e) {
  return (
    (e.target.onerror = null),
    (e.target.src = "https://www.rabrotech.com/upload/default/image-not-found.png")
  );
}

export { DOMAIN_API, TOKEN, USER_LOGIN, tokenByClass, imgNotFound };
