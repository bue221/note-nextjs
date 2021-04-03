import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import {
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";

import { useStyles } from "../../frontend/forms/styles";

const FormNote = ({ note, method, routeFetch, title, btnLabel }) => {
  const classes = useStyles();
  const router = useRouter();

  const [form, setForm] = useState({
    title: note?.title || "",
    description: note?.description || "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const createNote = async () => {
    try {
      const res = fetch(routeFetch, {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    let err = {};
    if (!form.title.length) {
      err.title = "Title is required";
    }
    if (!form.description.length) {
      err.description = "Description is required";
    }
    setErrors(err);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isSubmitting) {
      if (!Object.keys(errors).length) {
        createNote();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  //   useEffect(() => {
  //     validate();
  //   }, [form]);

  return (
    <div className={classes.container}>
      <Typography variant="h3">{title}</Typography>
      <div>
        {isSubmitting ? (
          <CircularProgress color="primary" />
        ) : (
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              variant="filled"
              type="text"
              label="title"
              value={form.title}
              onChange={handleChange}
              name="title"
              size="small"
              error={!!errors?.title}
              helperText={errors?.title}
            />
            <TextField
              variant="filled"
              type="text"
              label="description"
              value={form.description}
              onChange={handleChange}
              name="description"
              size="small"
              multiline
              rows={8}
              error={!!errors?.description}
              helperText={errors?.description}
            />
            <Button type="submit" variant="contained" color="secondary">
              {btnLabel}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormNote;
