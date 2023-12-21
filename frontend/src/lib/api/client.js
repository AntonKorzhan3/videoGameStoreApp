import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "http://ec2-3-81-122-157.compute-1.amazonaws.com",
  }),
  options
);

export default client;
