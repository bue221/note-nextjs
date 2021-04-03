import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: "2rem",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    padding: "2rem",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  content: {
    padding: ".7rem 0",
  },
}));
