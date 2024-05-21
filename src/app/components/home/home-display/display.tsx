"use client";

import { Typography } from "@mui/material";
import Countdown from "react-countdown";
import DisplayCounterFrame from "./display-couter-frame";
import DisplayFrame from "./display-frame";

export default function Display() {
  const eventDate = new Date(2024, 7, 31, 21, 0, 0);

  return (
    <DisplayFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ days }) => {
            return <Typography variant="h3">{days}</Typography>;
          }}
        ></Countdown>
        <Typography variant="h4">dias</Typography>
      </DisplayCounterFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ hours }) => {
            return <Typography variant="h3">{hours}</Typography>;
          }}
        ></Countdown>
        <Typography variant="h4">horas</Typography>
      </DisplayCounterFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ minutes }) => {
            return <Typography variant="h3">{minutes}</Typography>;
          }}
        ></Countdown>
        <Typography variant="h4">minutos</Typography>
      </DisplayCounterFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ seconds }) => {
            return <Typography variant="h3">{seconds}</Typography>;
          }}
        ></Countdown>
        <Typography variant="h4">segundos</Typography>
      </DisplayCounterFrame>
    </DisplayFrame>
  );
}
