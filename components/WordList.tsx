import { FlatList, StyleSheet, Text, View } from "react-native";
import CardItem from "./CardItem";

interface IProps {
  words: any[];
}

export default function WordList({ words }: IProps) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 60 }}
        data={words}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item }) => <CardItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 18,
    marginVertical: 5,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  cardItem: {
    gap: 2,
  },
});
