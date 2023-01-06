import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Card, Searchbar } from "react-native-paper";

const Home = () => {
  const navigate = (screen) => {};
  return (
    <View>
      <Text style={styles.title}>Welcome to AI app 🚀🚀</Text>
      <View style={styles.cards}>
        <Card elevation={5} mode="elevated" style={styles.card}>
          <TouchableOpacity>
            <Image source={require("../../../assets/favicon.png")}></Image>
          </TouchableOpacity>
        </Card>

        <Card elevation={5} mode="elevated" style={styles.card}>
          <TouchableOpacity>
            <Image source={require("../../../assets/favicon.png")}></Image>
          </TouchableOpacity>
        </Card>
      </View>
      <View style={styles.cards}>
        <Card elevation={5} mode="elevated" style={styles.card}>
          <TouchableOpacity>
            <Image source={require("../../../assets/favicon.png")}></Image>
          </TouchableOpacity>
        </Card>

        <Card elevation={5} mode="elevated" style={styles.card}>
          <TouchableOpacity>
            <Image source={require("../../../assets/favicon.png")}></Image>
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
  },
  card: {
    width: "40%",
    height: 190,
    margin: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "DroidSans",
    fontSize: 20,
    margin: 10,
    fontWeight: "450",
  },
});
