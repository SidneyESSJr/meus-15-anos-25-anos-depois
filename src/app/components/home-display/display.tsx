"use client";
import Countdown from "react-countdown";
import DisplayFrame from "./display-frame";
import DisplayCounterFrame from "./display-couter-frame";
import { Typography } from "@mui/material";

export default function Display() {
  const eventDate = new Date(2024, 8, 30, 21, 0, 0);

  return (
    <DisplayFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ days }) => {
            return <span>{days}</span>;
          }}
        ></Countdown>
        <Typography variant="h4">Days</Typography>
      </DisplayCounterFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ hours }) => {
            return <span>{hours}</span>;
          }}
        ></Countdown>
        <Typography variant="h4">Hours</Typography>
      </DisplayCounterFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ minutes }) => {
            return <span>{minutes}</span>;
          }}
        ></Countdown>
        <Typography variant="h4">Minutes</Typography>
      </DisplayCounterFrame>
      <DisplayCounterFrame>
        <Countdown
          date={eventDate.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={({ seconds }) => {
            return <span>{seconds}</span>;
          }}
        ></Countdown>
        <Typography variant="h4">Seconds</Typography>
      </DisplayCounterFrame>
    </DisplayFrame>
  );
}
