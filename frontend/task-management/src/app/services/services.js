import axios from "axios";

const Get = async (url,dataObject={}) => {
  try {
    const response = await axios.get(url,dataObject);
    return response;
  } catch (error) {
    return error;
  }
};

const Post = async (url, dataObject={}) => {
  // console.log('url',url,"\npostdata",postdata)
  try {
    const data = await axios.post(url, dataObject);
    return data;
  } catch (error) {
    return error;
  }
};

const Patch = async (url,dataObject={}) => {
  try {
    const { data } = await axios.patch(url,dataObject);
    return data;
  } catch (error) {
    return { error };
  }
};
const Put = async (url,dataObject={}) => {
  try {
    const { data } = await axios.put(url,dataObject);
    return data;
  } catch (error) {
    return { error };
  }
};

const Delete = async (url,dataObject={}) => {
  try {
    const data = await axios.delete(url,dataObject);
    return data;
  } catch (error) {
    return error;
  }
};

export { Get, Post, Patch, Put, Delete };
