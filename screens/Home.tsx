import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DefaultTemplate from "../components/DefaultTemplate";
import { COLORS, SIZES } from "../styles/constants";

export default function HomeScreen({ navigation }: any) {
  return (
    <DefaultTemplate>
      <View style={styles.titleSection}>
        <Image
          source={require("../assets/idea.png")}
          style={{ width: "50%", height: "50%" }}
        />
        <Text style={styles.title}>TIPS</Text>
      </View>
      <View style={styles.subText}>
        <Text style={styles.subTitle}>Bora jogar ?</Text>
        <Text style={styles.subDescription}>Divirta-se com seus amigos</Text>
      </View>
      <View style={styles.btnSection}>
        <TouchableOpacity
          style={styles.startGameBtn}
          onPress={() => navigation.navigate("create-game")}
          activeOpacity={0.8}
        >
          <Text style={styles.btnText}>NOVO JOGO</Text>
        </TouchableOpacity>
      </View>
    </DefaultTemplate>
  );
}

const styles = StyleSheet.create({
  titleSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: { fontWeight: "bold", fontSize: 80, color: COLORS.primary },
  subText: {
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fefefe",
  },
  subDescription: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fefefe",
    opacity: 0.5,
  },
  btnSection: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  startGameBtn: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  btnText: {
    fontSize: SIZES.fontMedium,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
