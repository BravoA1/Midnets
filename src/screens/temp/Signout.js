import { Text, TouchableOpacity, View } from "react-native";
import { firebase } from "../../../config";
import { useContext } from "react";
import { UserContext } from "../../services/user/user.context";

export function Signout() {
  const { info } = useContext(UserContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        {info.email} / {info.name}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          padding: 20,
          borderRadius: 50,
          margin: 40,
        }}
        onPress={() => {
          firebase.auth().signOut();
        }}
      >
        <Text>Signout</Text>
      </TouchableOpacity>
    </View>
  );
}
