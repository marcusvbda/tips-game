import { StatusBar } from "expo-status-bar";
import { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../styles/constants";

interface IProps {
  children: ReactNode;
}

export default function DefaultTemplate({ children }: IProps) {
  return (
    <View style={styles.defaultContainer}>
      <StatusBar style="auto" />
      <View style={styles.mainContent}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  mainContent: {
    flex: 1,
    paddingTop: 40,
  },
});
