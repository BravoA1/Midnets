import { useEffect, useState } from "react";
import SVG, { Circle, Path } from "react-native-svg";

export const CountDown = ({ seconds, onTimeUp }) => {
  const pointsCount = seconds;
  const [pointsToRender, setPointsToRender] = useState(seconds);
  const [path, setPath] = useState(
    "M65 320a260 260 0 1 0 520 0a260 260 0 1 0 -520 0"
  );
  console.log(
    "pointsToRender",
    pointsToRender,
    "pointsToRender",
    pointsToRender
  );

  const width = 650;
  const height = 650;
  const cx = 325;
  const cy = 320;
  const r = 260;
  const strokeWidth = 20;

  useEffect(() => {
    if (pointsToRender >= 0) {
      // Function to update the timer every second
      const interval = setInterval(() => {
        setPointsToRender((prevSeconds) => prevSeconds - 1);
      }, 1000);
      // Clean up the interval on unmount or when seconds reach 0
      setPath(() => calculatePath());
      return () => {
        clearInterval(interval);
      };
    } else {
      // Time is up, invoke the callback function
      onTimeUp();
    }
  }, [pointsToRender]);

  const calculatePath = () => {
    const theta = (2 * Math.PI) / pointsCount;
    const radius = r - 8;
    let path = `M${cx} ${cy}V${radius}`;
    for (let i = 0; i <= pointsToRender; i++) {
      const x = cx - radius * Math.sin(i * theta);
      const y = cy - radius * Math.cos(i * theta);
      path += `L ${x} ${y}`;
    }
    return path + "Z";
  };

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width={50}
      height={50}
      viewBox={`0 0 ${width} ${height}`}
    >
      <Path
        d="M215 85A10 10 0 1 1 215 0H435A 10 10 0 1 1 435 85Z"
        fill="black"
      />
      <Circle
        cx={cx}
        cy={cy}
        r={r}
        stroke="black"
        strokeWidth={strokeWidth}
        fill="white"
      />
      <Path
        d="M520 105A 10 10 0 1 1 553.1615029022016 82.63228386117012L631.4485093881062 198.69754401887596A10 10 0 1 1 598.2870064859046 221.06526015770584Z"
        fill="black"
      />
      <Path
        d={path}
        fill={pointsToRender < pointsCount / 4 ? "red" : "black"}
      />
    </SVG>
  );
};
