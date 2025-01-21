import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DefaultTemplate from "../components/DefaultTemplate";
import { COLORS, SIZES } from "../styles/constants";
import Header from "../components/Header";

export default function HomeScreen({ navigation }: any) {
  return (
    <DefaultTemplate>
      <Header />
      <View style={styles.btnsSection}>
        <TouchableOpacity
          style={styles.btnStart}
          onPress={() => navigation.navigate("create-game")}
          activeOpacity={0.8}
        >
          <Text style={styles.btnStartText}>NOVO JOGO</Text>
        </TouchableOpacity>
      </View>
    </DefaultTemplate>
  );
}

const styles = StyleSheet.create({
  btnsSection: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
    gap: 20,
  },
  btnStart: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  btnStartText: {
    fontSize: SIZES.fontMedium,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
