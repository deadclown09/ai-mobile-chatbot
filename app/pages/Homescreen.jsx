import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import chatFacesData from "../services/chatFacesData";

const Homescreen = () => {
  const [chatFaces, setChatFaces] = useState(chatFacesData);
  const [selectedChatFace, setSelectedChatFace] = useState(chatFaces[0]);

  const handleChatBotSelect = (id) => {
    setSelectedChatFace(chatFaces.find((chatFace) => chatFace.id === id));
  };

  return (
    <View style={{ alignItems: "center", gap: 30 }}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            color: selectedChatFace.primary,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Hi!
        </Text>
        <Text
          style={{
            color: selectedChatFace.primary,
            fontSize: 35,
            fontWeight: "bold",
          }}
        >
          It's me,{" "}
          <Text style={{ textTransform: "uppercase" }}>
            {selectedChatFace.name} 👋
          </Text>
        </Text>
      </View>

      <Image
        source={{ uri: selectedChatFace.image }}
        style={{ width: 150, height: 150 }}
      />

      <Text
        style={{
          color: "#151318",
          fontSize: 20,
          fontWeight: "500",
        }}
      >
        How can I help you today?
      </Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ececec",
          height: 110,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <FlatList
          data={chatFaces}
          horizontal={true}
          renderItem={({ item }) =>
            selectedChatFace.id !== item.id && (
              <TouchableOpacity
                style={{ marginHorizontal: 15 }}
                onPress={() => handleChatBotSelect(item.id)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </TouchableOpacity>
            )
          }
        />
        <Text style={{ color: "#838383", fontSize: 15, fontWeight: "500" }}>
          Choose your favorite ChatBuddy
        </Text>
      </View>

      <TouchableOpacity
        style={[
          { backgroundColor: selectedChatFace.primary },
          {
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 25,
            width: Dimensions.get("screen").width * 0.6,
            alignItems: "center",
            marginTop: 25,
          },
        ]}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Chat with me!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homescreen;
