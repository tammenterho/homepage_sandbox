import { useQuery } from "@tanstack/react-query";
import {
  getAll,
  deleteComment,
  createComment,
  modifyComment,
} from "./commentsService";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

export function deleteCommentId(id) {
  console.log(id);
  deleteComment(id);
  window.location.reload(false);
}

export function Comments() {
  const { status, error, data: comments } = useQuery(["comments"], getAll); // Käytä queryFn:ään suoraan getAll-funktiota
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [editMode, setEditMode] = useState(false);

  if (status === "loading") {
    return <div>Ladataan...</div>;
  }

  if (status === "error") {
    return <div>Tapahtui virhe: {error.message}</div>;
  }

  function postComment() {
    createComment(name, comment);
    setName("");
    setComment("");
    window.location.reload(false);
  }

  function editComment(commentToEdit) {
    setEditMode(true);
    console.log(commentToEdit.id);
    setName(commentToEdit.name);
    setComment(commentToEdit.comment);
  }

  function saveComment(comment) {
    modifyComment(comment.id, name, comment);
  }

  return (
    <>
      <h1>Comments</h1>
      <Link to="/">
        <Button>Return</Button>
      </Link>
      <br></br>
      {!editMode ? (
        <>
          <TextField
            id="input-name"
            required
            label={"Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <TextField
            id="input-comment"
            required
            label={"Comment"}
            multiline
            rows={6}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br></br>
          <Button onClick={() => postComment()}>POST</Button>{" "}
        </>
      ) : (
        <>
          <TextField
            id="input-name"
            required
            label={"Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <TextField
            id="input-comment"
            required
            label={"Comment"}
            multiline
            rows={6}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <br></br>
          <Button
            color="success"
            variant="contained"
            onClick={() => saveComment(comment)}
          >
            SAVE
          </Button>
        </>
      )}
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name} {comment.comment} {comment.id}
            <Button color="error" onClick={() => deleteCommentId(comment.id)}>
              Delete
            </Button>
            <Button onClick={() => editComment(comment)}>Edit</Button>
          </li>
        ))}
      </ul>
    </>
  );
}
