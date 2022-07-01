import React from "react";
import { View, Text } from "react-native";


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <Text
      style={{
        // fontFamily: "Courier",
        fontSize: 30,
        fontStyle: "italic",
        fontWeight: "600",
        color: "tomato",
        textTransform: "capitalize",
        textDecorationLine: "underline",
        textAlign: "center",
        lineHeight: 30,
      }}
     >I love react native! This is my first React APP</Text>

    </View>
  );
}
