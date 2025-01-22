import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Timer from "./Timer";
import { COLORS, SIZES } from "../styles/constants";
import { IGame } from "../actions/game";

interface IProps {
  game: IGame;
}

export default function TipCard({ game }: IProps) {
  return (
    <View style={styles.playingSection}>
      <Text
        style={{
          ...styles.tipText,
          color: COLORS[game.match.playing],
        }}
      >
        {game.match.playing === "teamA" ? "Time A" : "Time B"}
      </Text>
      {/* <Timer min={game.match.leaderTime} /> */}
      <View style={styles.btnSection}>
        <TouchableOpacity style={styles.btnStart} activeOpacity={0.8}>
          <Text style={styles.btnCreateText}>Nova dica</Text>
        </TouchableOpacity>
      </View>
      {/* <Text
        style={{
          ...styles.tipText,
          color: COLORS[game.match.playing],
        }}
      >
        Paçoca
      </Text> */}
      {/* <Timer min={game.match.tipTime} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  playingSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  tipText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  btnCreateText: {
    fontSize: SIZES.fontSmall,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  btnSection: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  btnStart: {
    width: "60%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
});
