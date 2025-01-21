import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../styles/constants";
import { useEffect, useState } from "react";

interface IProps {
  label: string;
  max: number;
  min: number;
  value: number | null | undefined;
  onChange: (value: number) => void;
}
export default function QtyInput({ label, max, value, min, onChange }: IProps) {
  const [v, setV] = useState<number>(value || 0);

  const handleIncrement = () => {
    if (v < max) {
      setV(v + 1);
    }
  };

  const handleDecrement = () => {
    if (v > min) {
      setV(v - 1);
    }
  };

  useEffect(() => {
    setV(value || 0);
  }, [value]);

  useEffect(() => {
    onChange(v);
  }, [v]);

  useEffect(() => {
    if (v > max) {
      setV(max);
    }
  }, [max]);

  useEffect(() => {
    if (v < min) {
      setV(min);
    }
  }, [min]);

  return (
    <View style={styles.content}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <TouchableOpacity
          style={styles.btnAction}
          onPress={handleDecrement}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.label}>{String(v)}</Text>
        <TouchableOpacity
          style={styles.btnAction}
          onPress={handleIncrement}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    gap: 10,
  },
  label: {
    color: "#fefefe",
    fontSize: SIZES.fontMedium,
    textAlign: "center",
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  btnAction: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.backgroundDark,
  },
  btnText: {
    color: "#fefefe",
    fontSize: SIZES.fontMedium,
  },
});
