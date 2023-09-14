import axios from "axios";

const baseUrl = "http://localhost:8080/comments";

export const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const deleteComment = async (id) => {
  axios.delete = await axios.delete(`${baseUrl}/${id}`).then((response) => {
    console.log(`Deleted comment with id ${id}`);
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll: getAll, delete: deleteComment };
