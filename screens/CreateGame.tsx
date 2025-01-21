import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
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
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.configSection}>
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
          <View style={styles.btnsSection}>
            <TouchableOpacity
              style={styles.btnStart}
              onPress={handleCreateGame}
              activeOpacity={0.8}
            >
              <Text style={styles.btnCreateText}>COMEÇAR JOGO</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </DefaultTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 40,
  },
  btnsSection: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    gap: 20,
    width: "100%",
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
  configSection: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
});
