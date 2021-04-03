import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import FormNote from "../../frontend/forms/createNote";

const EditNote = () => {
  const router = useRouter();
  const [note, setNote] = useState({});

  useEffect(async () => {
    if (router.query?.id) {
      const res = await fetch(
        process.env.BaseApi + `api/note/${router.query.id}` ||
          `http://localhost:3000/api/note/${router.query.id}`
      );
      const { data } = await res.json();
      setNote(data);
      console.log(note);
    }
  }, [router.query.id]);

  console.log(note);

  return (
    <>
      {note.title && (
        <FormNote
          note={note}
          method="PUT"
          routeFetch={
            process.env.BaseApi + `api/note/${router.query.id}` ||
            `http://localhost:3000/api/note/${router.query.id}`
          }
          title="Update Note"
          btnLabel="Update"
        />
      )}
    </>
  );
};

// EditNote.getInitialProps = async ({ query: { id } }) => {
//   const res = await fetch(`http://localhost:3000/api/note/${id}`);
//   const { data } = await res.json();

//   return { note: data };
// };

export default EditNote;
