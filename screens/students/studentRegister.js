import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeLoginStudent = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.welcomeLoginStudent}>
      <Image
        style={styles.undrawChoosingHouseRe1rv7Icon}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/undrawChoosing.png")}
      />
      <Text style={styles.welcomeBackText1}>
        <Text style={styles.welcomeBackText}>Welcome back</Text>
        <Text style={styles.text}>{` `}</Text>
      </Text>
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("HomePage")}
      />
      <Text style={styles.signInText}>sign in</Text>
      <View style={styles.rectangleView1} />
      <Text style={styles.yourEmailText}>Your email</Text>
      <Text style={styles.forgetPasswordText}>Forget Password?</Text>
      <Text style={styles.passwordText}>Password</Text>
      <Text style={styles.orText}>{`or `}</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/Vector2.png")}
      />
      <Text
        style={styles.dontHaveAnyAccount}
      >{`Don’t have any account ? `}</Text>
      <Pressable
        style={styles.signUpPressable}
        onPress={() => navigation.navigate("RegisterPageVariant2")}
      >
        <Text style={styles.signUpText}>sign up</Text>
        <Text style={styles.text1}>{`  `}</Text>
      </Pressable>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/Ellipse11.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/Ellipse12.png")}
      />
      <Image
        style={styles.userAltIcon}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/user-alt.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/Vector1.png")}
      />
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/Group2.png")}
      />
      <Image
        style={styles.facebook1Icon}
        resizeMode="cover"
        source={require("../../assets/Students/studentLoginPage/facebook1.png")}
      />
      <Pressable
        style={styles.vectorPressable}
        onPress={() => navigation.navigate("Splashscreen")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../../assets/Students/studentLoginPage/Vector.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  undrawChoosingHouseRe1rv7Icon: {
    position: "absolute",
    top: 122,
    left: 76,
    width: 237,
    height: 175,
    overflow: "hidden",
  },
  welcomeBackText: {
    fontSize: 24,
  },
  text: {
    fontSize: 20,
  },
  welcomeBackText1: {
    position: "absolute",
    top: 341,
    left: 119,
    fontWeight: "700",
    fontFamily: ", sans-serif, sans-serif",
    color: "#696969",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 397,
    left: 33,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 310,
    height: 51,
  },
  rectanglePressable: {
    position: "absolute",
    top: 602,
    left: 62,
    borderRadius: 13,
    backgroundColor: "#3f424a",
    width: 267,
    height: 45,
  },
  signInText: {
    position: "absolute",
    top: 611,
    left: 159,
    fontSize: 24,
    fontFamily: ", sans-serif",
    color: "#fff",
    textAlign: "left",
    width: 87,
    height: 25,
  },
  rectangleView1: {
    position: "absolute",
    top: 485,
    left: 33,
    borderRadius: 13,
    backgroundColor: "#d9d9d9",
    width: 310,
    height: 51,
  },
  yourEmailText: {
    position: "absolute",
    top: 417,
    left: 66,
    fontSize: 14,
    fontFamily: ", sans-serif",
    color: "#000",
    textAlign: "left",
  },
  forgetPasswordText: {
    position: "absolute",
    top: 554,
    left: 236,
    fontSize: 14,
    fontFamily: ", sans-serif",
    color: "#0092bf",
    textAlign: "left",
  },
  passwordText: {
    position: "absolute",
    top: 499,
    left: 65,
    fontSize: 14,
    fontFamily: ", sans-serif",
    color: "#a1a1a1",
    textAlign: "left",
  },
  orText: {
    position: "absolute",
    top: 710,
    left: 183,
    fontSize: 20,
    fontFamily: ", sans-serif",
    color: "#696969",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "1.96%",
    width: "6.36%",
    top: "59.15%",
    right: "16.54%",
    bottom: "38.89%",
    left: "77.1%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  dontHaveAnyAccount: {
    position: "absolute",
    top: 676,
    left: 96,
    fontSize: 14,
    fontFamily: ", sans-serif",
    color: "#000",
    textAlign: "left",
  },
  signUpText: {
    color: "#0092bf",
  },
  text1: {
    color: "#000",
  },
  signUpPressable: {
    position: "absolute",
    top: 676,
    left: 266,
    fontSize: 14,
    fontFamily: ", sans-serif",
    textAlign: "left",
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 119,
    height: 119,
    opacity: 0.3,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 36,
    left: 0,
    width: 75,
    height: 80,
  },
  userAltIcon: {
    position: "absolute",
    top: 415,
    left: 41,
    width: 17,
    height: 17,
    overflow: "hidden",
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.35%",
    width: "4.58%",
    top: "58.33%",
    right: "85.24%",
    bottom: "39.32%",
    left: "10.18%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupIcon: {
    position: "absolute",
    height: "7.06%",
    width: "33.08%",
    top: "87.32%",
    right: "34.1%",
    bottom: "5.62%",
    left: "32.82%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  facebook1Icon: {
    position: "absolute",
    top: 745,
    left: 144,
    width: 30,
    height: 30,
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "1.53%",
    top: "0.94%",
    right: "93.89%",
    bottom: "95.77%",
    width: "4.58%",
    height: "3.29%",
  },
  welcomeLoginStudent: {
    position: "relative",
    backgroundColor: "#dfe8ea",
    flex: 1,
    width: "100%",
    height: 840,
    overflow: "hidden",
  },
});

export default WelcomeLoginStudent;
