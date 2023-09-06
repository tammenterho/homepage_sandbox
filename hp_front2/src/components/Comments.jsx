import { useQuery } from "@tanstack/react-query";
import { getAll } from "./commentsService";

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
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </>
  );
}
