import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SIZES } from "../styles/constants";

interface IProps {
  min: number;
}

export default function Timer({ min }: IProps) {
  const [timeLeft, setTimeLeft] = useState(min * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [min]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return <Text style={styles.timer}>{formatTime(timeLeft)}</Text>;
}

const styles = StyleSheet.create({
  timer: {
    fontSize: SIZES.fontSmall,
    color: "#fefefe",
    fontWeight: "bold",
  },
});
