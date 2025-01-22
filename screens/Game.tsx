import { ActivityIndicator, StyleSheet, View } from "react-native";
import DefaultTemplate from "../components/DefaultTemplate";
import { COLORS } from "../styles/constants";
import { useEffect, useState } from "react";
import { createGame, IGame } from "../actions/game";
import WordList from "../components/WordList";
import TipCard from "../components/TipCard";

export default function GameScreen({ route }: any) {
  const [game, setGame] = useState<IGame>({
    words: [],
    maps: [],
    traps: [],
    match: {
      playing: "teamA",
      tip: "",
      tipTime: 0,
      leaderTime: 0,
    },
  });
  const [loading, setLoading] = useState(false);

  const { numWords, numWordsPerTeam, numTraps, leaderTime, responseTime } =
    route.params;

  const initGame = () => {
    setLoading(true);
    const newGame: IGame = createGame(numWords, numWordsPerTeam, numTraps);
    setGame({
      ...newGame,
      match: { ...newGame.match, tipTime: leaderTime, leaderTime },
    });
    setLoading(false);
  };

  useEffect(() => {
    initGame();
  }, []);

  return (
    <DefaultTemplate>
      {loading ? (
        <View style={styles.loadingSection}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <TipCard game={game} />
          <View style={{ flex: 6 }}>
            <WordList words={game.words} />
          </View>
        </View>
      )}
    </DefaultTemplate>
  );
}

const styles = StyleSheet.create({
  loadingSection: { flex: 1, justifyContent: "center", alignItems: "center" },
});
