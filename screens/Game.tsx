import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import DefaultTemplate from "../components/DefaultTemplate";
import { COLORS } from "../styles/constants";
import Header from "../components/Header";
import { useEffect, useState } from "react";

export default function GameScreen({ route }: any) {
  const [loading, setLoading] = useState(false);

  const { numWords, numWordsPerTeam, numTraps, leaderTime, responseTime } =
    route.params;

  useEffect(() => {
    const createGate = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    createGate();
  }, []);

  return (
    <DefaultTemplate>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <View>
          <Text>Quantidade de palavras: {numWords}</Text>
          <Text>Palavras por time: {numWordsPerTeam}</Text>
          <Text>Quantidade de armadilhas: {numTraps}</Text>
          <Text>Tempo para o líder pensar (min): {leaderTime}</Text>
          <Text>Tempo para responder (min): {responseTime}</Text>
        </View>
      )}
    </DefaultTemplate>
  );
}

// const styles = StyleSheet.create({
//   //
// });
