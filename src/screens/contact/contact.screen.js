import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { styled } from "styled-components/native";
import Logo from "../../components/Logo";

const P = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
`;

const Titre = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const ContactScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo height={"default"} />
        <P style={styles.p1}>
          Lorem ipsum dolor sit amet consectetur. Dolores asperiores eum ducimus
          culpa saepe! Soluta totam aut repellendus illo vero. Quam optio
          consequatur sunt mollitia praesentium. Laborum ut earum aut ducimus
          molestias. Dolor obcaecati pariatur ab quae minus? Nisi non labore
          pariatur assumenda dolores! Architecto, repudiandae aut? Dolorum,
          inventore recusandae.
        </P>
        <View style={styles.phoneContainer}>
          <Image
            source={require("../../img/appel.png")}
            style={styles.phoneImg}
          />
          <Titre style={styles.phoneNumber}>583 123 456</Titre>
        </View>
        <View style={styles.emailContainer}>
          <Image
            source={require("../../img/arobase.png")}
            style={styles.arobaseImg}
          />
          <Titre style={styles.email}>midnets@outlook.fr</Titre>
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
          <Titre style={styles.creditTitle}>Crédits</Titre>
          <P>
            Lorem ipsum dolor sit amet consectetur. Dolores asperiores eum
            ducimus culpa saepe! Soluta totam aut repellendus illo vero.
          </P>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
  p1: {
    marginTop: "5%",
    lineHeight: 15,
  },
  phoneContainer: {
    margin: 0,
    width: "100%",
    marginTop: "5%",
    height: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  phoneImg: {
    resizeMode: "contain",
    width: "25%",
    height: "45%",
  },
  phoneNumber: {
    fontSize: 32,
  },
  emailContainer: {
    // margin: 0,
    marginBottom: "10%",
    marginTop: "5%",
    width: "100%",
    height: "10%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  arobaseImg: {
    resizeMode: "contain",
    width: "25%",
    height: "45%",
  },
  email: {
    fontSize: 20,
  },
  socialNetworkContainer: {
    width: "100%",
    height: "10%",
    marginBottom: "5%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  network: {
    resizeMode: "contain",
    width: "45%",
    height: "55%",
  },
  creditContainer: {
    margin: 0,
    width: "100%",
    height: "30%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "30%",
  },
  creditTitle: {
    fontSize: 32,
    marginBottom: "2%",
  },
});
