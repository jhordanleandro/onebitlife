import react from "react";
import { View, ScrollView, Image, Text } from "react-native";

export default function Start() {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../../assets/icons/logo3.png")} />
          <Text>
            Vamos transformar sua vida {"\n"} em um jogo. Buscando sempre {"\n"}{" "}
            o melhor nível.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
