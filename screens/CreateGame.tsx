import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DefaultTemplate from "../components/DefaultTemplate";
import { COLORS, SIZES } from "../styles/constants";
import QtyInput from "../components/QtyInput";

export default function CreateGameScreen({ navigation }: any) {
  const [numWords, setNumWords] = useState(25);
  const [numWordsPerTeam, setNumWordsPerTeam] = useState(8);
  const [numTraps, setNumTraps] = useState(1);
  const [leaderTime, setLeaderTime] = useState(3);
  const [responseTime, setResponseTime] = useState(5);

  const handleCreateGame = () => {
    const maxQtyPerTeam = Math.floor(numWords / 2 - numTraps);

    if (numWordsPerTeam > maxQtyPerTeam) {
      return alert("Quantidade de palavras por time invalida ");
    }
    const selectedQty = numWordsPerTeam * 2 + numTraps;
    if (selectedQty > numWords) {
      return alert("Quantidade de palavras por time invalida");
    }

    navigation.navigate("game", {
      numWords,
      numWordsPerTeam,
      numTraps,
      leaderTime,
      responseTime,
    });
  };

  return (
    <DefaultTemplate>
      <View style={styles.formSection}>
        <QtyInput
          label="Quantidade de palavras"
          max={100}
          min={25}
          value={numWords}
          onChange={setNumWords}
        />
        <QtyInput
          label="Quantidade de palavras"
          max={100}
          min={25}
          value={numWords}
          onChange={setNumWords}
        />
        <QtyInput
          label="Palavras por time"
          max={numWords}
          min={1}
          value={numWordsPerTeam}
          onChange={setNumWordsPerTeam}
        />
        <QtyInput
          label="Quantidade de armadilhas"
          max={5}
          min={1}
          value={numTraps}
          onChange={setNumTraps}
        />
        <QtyInput
          label="Tempo para o líder pensar (min)"
          max={10}
          min={1}
          value={leaderTime}
          onChange={setLeaderTime}
        />
        <QtyInput
          label="Tempo para responder (min)"
          max={10}
          min={1}
          value={responseTime}
          onChange={setResponseTime}
        />
      </View>
      <View style={styles.btnSection}>
        <TouchableOpacity
          style={styles.btnStart}
          onPress={handleCreateGame}
          activeOpacity={0.8}
        >
          <Text style={styles.btnCreateText}>COMEÇAR JOGO</Text>
        </TouchableOpacity>
      </View>
    </DefaultTemplate>
  );
}

const styles = StyleSheet.create({
  formSection: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  btnStart: {
    marginTop: 40,
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.primary,
  },
  btnCreateText: {
    fontSize: SIZES.fontMedium,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  btnSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
