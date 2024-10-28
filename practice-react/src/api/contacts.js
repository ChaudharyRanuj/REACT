import axios from "axios";

export async function fetchUsers(url) {
  try {
    const response = await axios.get(url);
    if (response.data) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}
export async function UpdateUser(url, id, data) {
  try {
    const response = await axios.put(`${url}/${id}`, data);
    if (response.data) {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
}
export async function addUsers(url, data) {
  try {
    const response = await axios.post(url, data);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
