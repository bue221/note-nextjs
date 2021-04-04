import { useRouter } from "next/router";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import useStyles from "../frontend/styles/index";

const index = ({ notes }) => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <div className={classes.container}>
        {notes?.map((note) => (
          <Card className={classes.root} key={note._id}>
            <CardContent>
              <Typography
                color="textSecondary"
                className={classes.title}
                gutterBottom
              >
                {note.title}
              </Typography>
              <Typography color="textSecondary" className={classes.pos}>
                ---------------------------------
              </Typography>
              <Typography variant="body2" component="p">
                {note.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="secondary"
                onClick={() => router.push(`/${note._id}/edit`)}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => router.push(`/${note._id}`)}
              >
                View
              </Button>
            </CardActions>
          </Card>
        ))}
        {!notes.length && (
          <Typography variant="h4" gutterBottom style={{ textAlign: "center" }}>
            Create a new Note you dont have any one yet{" "}
          </Typography>
        )}
      </div>
    </>
  );
};

index.getInitialProps = async () => {
  const res = await fetch(
    process.env.enviroment === "production"
      ? process.env.BaseApi + "api/note/"
      : "http://localhost:3000/api/note"
  );
  const { data } = await res.json();

  return { notes: data };
};

export default index;
