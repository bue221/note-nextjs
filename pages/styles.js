import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "2rem",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
