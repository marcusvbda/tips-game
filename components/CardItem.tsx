import { StyleSheet, Text, View } from "react-native";

export default function CardItem({ item }: any) {
  return (
    <View style={styles.cardItem}>
      <Text style={styles.item}>{item.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
