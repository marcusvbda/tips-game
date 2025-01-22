import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { View } from "react-native";
import { COLORS } from "../styles/constants";

interface IProps {
  children: ReactNode;
}

export default function DefaultTemplate({ children }: IProps) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <StatusBar style="auto" />
      <View style={{ flex: 1, paddingTop: 55 }}>{children}</View>
    </View>
  );
}
