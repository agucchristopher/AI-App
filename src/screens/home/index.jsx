import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Card, Searchbar } from "react-native-paper";
import screens from "../../data";

const Home = () => {
  const navigate = (screen) => {};
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Welcome to AI app 🚀🚀</Text>
      <FlatList
        data={screens}
        numColumns={2}
        renderItem={({ item }) => (
          <Card elevation={5} mode="elevated" style={styles.card}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.image}
                style={{ alignSelf: "center" }}
              ></Image>
              <Text style={[styles.title, { color: "black", fontSize: 15 }]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          </Card>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    // flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    height: Dimensions.get("window").height,
  },
  cards: {
    flexDirection: "row",
  },
  card: {
    width: "40%",
    height: 190,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "DroidSans",
    fontSize: 20,
    margin: 10,
    fontWeight: "450",
    color: "white",
  },
});
