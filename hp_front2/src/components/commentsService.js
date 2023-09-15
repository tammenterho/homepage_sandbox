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

export const createComment = async (name, comment) => {
  try {
    const response = await axios.post(baseUrl, { name, comment });
    console.log("Comment created:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll: getAll, delete: deleteComment, create: createComment };
