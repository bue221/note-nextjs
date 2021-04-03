import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import {
  Paper,
  Typography,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import useStyles from "./style";

const Note = ({ note }) => {
  const router = useRouter();
  const classes = useStyles();

  const [isDeleting, setIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    handleClose();
  };

  const deleteNote = async () => {
    const noteId = router.query.id;
    try {
      const res = await fetch(`http://localhost:3000/api/note/${noteId}`, {
        method: "Delete",
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isDeleting) {
      deleteNote();
    }
  }, [isDeleting]);

  return (
    <>
      <div className={classes.container}>
        {isDeleting ? (
          <CircularProgress />
        ) : (
          <>
            <div className={classes.title}>
              <IconButton onClick={() => router.back()}>
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h4">{note.title}</Typography>
            </div>
            <div className={classes.content}>
              <Typography variant="body1">{note.description}</Typography>
            </div>
            <div className={classes.actions}>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleClickOpen}
              >
                Delete
              </Button>
            </div>
          </>
        )}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            You are sure to delete the note
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              if you delete the note you can be restore this
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              cancel
            </Button>
            <Button onClick={handleDelete} color="primary" autoFocus>
              sure
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

Note.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/note/${id}`);
  const { data } = await res.json();

  return { note: data };
};

export default Note;
