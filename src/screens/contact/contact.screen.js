import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { styled } from "styled-components";
import Logo from "../../components/Logo";

const Paragraph1 = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

export const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Logo height={"default"}/>
      <Paragraph1>
        Lorem ipsum dolor sit amet consectetur. Dolores asperiores eum ducimus
        culpa saepe! Soluta totam aut repellendus illo vero. Quam optio
        consequatur sunt mollitia praesentium. Laborum ut earum aut ducimus
        molestias. Dolor obcaecati pariatur ab quae minus? Nisi non labore
        pariatur assumenda dolores! Architecto, repudiandae aut? Dolorum,
        inventore recusandae.
      </Paragraph1>
      <View style={styles.phoneContainer}>
        <Image
          source={require("../../img/appel.png")}
          style={styles.phoneImg}
        />
        <Text style={styles.phoneNumber}>583 123 456</Text>
      </View>
      <View style={styles.emailContainer}>
        <Image
          source={require("../../img/arobase.png")}
          style={styles.arobaseImg}
        />
        <Text style={styles.email}>midnets@outlook.fr</Text>
      </View>
      <View style={styles.socialNetworkContainer}>
        <Image
          style={styles.network}
          source={require("../../img/facebook.png")}
        />
        <Image
          style={styles.network}
          source={require("../../img/instagram.png")}
        />
        <Image
          style={styles.network}
          source={require("../../img/twitter.png")}
        />
      </View>
      <View style={styles.creditContainer}>
        <Text style={styles.creditTitle}>Crédits</Text>
        <Text style={styles.creditDescription}>
          Lorem ipsum dolor sit amet consectetur. Dolores asperiores eum ducimus
          culpa saepe! Soluta totam aut repellendus illo vero.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // alignContent: 'center',
    justifyContent: "center",
    padding: "15%",
  },
  p1: {
    marginTop: "8%",
  },
  phoneContainer: {
    margin: 0,
    width: "100%",
    height: "10%",
    flex: 1,
    flexDirection: "row",
    // marginTop: '10%',
    justifyContent: "center",
    alignItems: "center",
  },
  phoneImg: {
    resizeMode: "contain",
    width: "25%",
    height: "25%",
  },
  phoneNumber: {
    fontSize: 32,
  },
  emailContainer: {
    margin: 0,
    width: "100%",
    height: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: 'center',
  },
  arobaseImg: {
    resizeMode: "contain",
    width: "25%",
    height: "25%",
  },
  email: {
    fontSize: 20,
    // marginLeft: '5%',
  },
  socialNetworkContainer: {
    margin: 0,
    width: "100%",
    height: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    // alignItems: 'center',
  },
  network: {
    resizeMode: "contain",
    width: "35%",
    height: "35%",
  },
  creditContainer: {
    margin: 0,
    width: "100%",
    height: "10%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30%",
  },
  creditTitle: {
    fontSize: 32,
    marginBottom: "5%",
  },
});
