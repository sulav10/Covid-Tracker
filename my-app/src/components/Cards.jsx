import React from "react";
import Card from "@material-ui/core/Card";
import styles from "./cards.module.css";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import cx from "classnames";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "loading...";
  }

  return (
    <div className={cx(styles.container)}>
      <Card className={cx(styles.card, styles.infected)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp
              start={0}
              end={confirmed.value}
              duration={1}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of active cases of <br />
            COVID -19
          </Typography>
        </CardContent>
      </Card>
      <Card className={cx(styles.card, styles.recovered)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp
              start={0}
              end={recovered.value}
              duration={1}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of recoveries from <br />
            COVID -19
          </Typography>
        </CardContent>
      </Card>
      <Card className={cx(styles.card, styles.death)}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={deaths.value} duration={1} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            Number of death caused by
            <br />
            COVID -19
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
