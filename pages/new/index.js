import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import FormNote from "../../frontend/forms/createNote";

const NewNote = () => {
  return (
    <FormNote
      method="POST"
      routeFetch={
        process.env.BaseApi + "/api/note" || "http://localhost:3000/api/note"
      }
      title="Create Note"
      btnLabel="Create"
    />
  );
};

export default NewNote;
