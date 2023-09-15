import { useQuery } from "@tanstack/react-query";
import { getAll, deleteComment, createComment } from "./commentsService";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export function deleteCommentId(id) {
  console.log(id);
  deleteComment(id);
}
/*
export function postComment(data) {
  const [name, setName] = useState("");
}

*/
export function Comments() {
  const { status, error, data: comments } = useQuery(["comments"], getAll); // Käytä queryFn:ään suoraan getAll-funktiota

  if (status === "loading") {
    return <div>Ladataan...</div>;
  }

  if (status === "error") {
    return <div>Tapahtui virhe: {error.message}</div>;
  }

  return (
    <>
      <h1>Comments</h1>
      <Link to="/">
        <Button>Return</Button>
      </Link>
      <br></br>
      <TextField id="input-name" required label={"Name"} />
      <br></br>
      <TextField
        id="input-comment"
        required
        label={"Comment"}
        multiline
        rows={6}
      />
      <br></br>
      {/*<Button onClick={() => postComment()}>POST</Button>}*/}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name} {comment.comment}{" "}
            <Button color="error" onClick={() => deleteCommentId(comment.id)}>
              Delete
            </Button>
            <Button>Edit</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
