// import axios from "axios";

// const API = axios.create({
//   baseURL: `http://localhost:8080/api/`,
// });


// export const GetPosts = async () => await API.get("/post/");
// export const CreatePost = async (data) => await API.post("/post/", data);
// export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);



import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:8080/api/`,
});

// User-related API calls
// In your API file
export const SignUpUser = async (data) => await API.post("/user/SignUp", data);
export const UserSignIn = async (data) => await API.post("/user/signIn", data);
export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (data) => await API.post("/post/", data);
export const GenerateAIImage = async (data) => await API.post("/generateImage/", data);
