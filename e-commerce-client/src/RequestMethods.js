import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2NkNzdkOTgyODkzNDI5NGQwZGRiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTg0Mzg2OCwiZXhwIjoxNjYwMTAzMDY4fQ.dmNDD6FMEUvhFcYN_Zim5NN70JeKib4qLu0LZ6btCzA"
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});