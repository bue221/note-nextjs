import { useRouter } from "next/router";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import { useStyles } from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const router = useRouter();

  const Link = ({ to, label, ...props }) => (
    <Button className={classes.link} onClick={() => router.push(to)} {...props}>
      {label}
    </Button>
  );
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.Container}>
          <Typography variant="h6" onClick={() => router.push("/")}>
            Note App
          </Typography>
          <Link label="Crear nota" to="/new" />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
