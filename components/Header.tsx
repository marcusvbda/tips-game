import { Image, StyleSheet, Text, View } from "react-native";
import { SIZES } from "../styles/constants";

export default function Header() {
  return (
    <View style={styles.titleSection}>
      <Text style={styles.titleText}>TIPS</Text>
      <Image source={require("../assets/idea.png")} style={styles.titleImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    width: "100%",
    gap: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  titleText: {
    color: "white",
    fontSize: SIZES.fontLarge,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingBottom: 20,
  },
  titleImage: {
    width: 80,
    height: 80,
  },
});
