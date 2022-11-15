import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_101_1091}>
        <Text style={styles.Text_101_1091}>
          Free design samples and previews for personal use only. Get access to
          premium, high quality designs, 100% editable &amp; customizable design
          (design system included), &amp; commercial use purpose by purchasing
          my products on the link below, thanks.
        </Text>
      </View>
      <View style={styles.View_101_1092}>
        <Text style={styles.Text_101_1092}>NEED FULL VERSION?</Text>
      </View>
      <View style={styles.View_101_1093}>
        <Text style={styles.Text_101_1093}>
          Please purchase this product on my Gumroad pages 👇 👇 👇
        </Text>
      </View>
      <View style={styles.View_101_1094}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0558374b-fb82-4a59-8f0d-f22956d19422"
          }}
          style={styles.ImageBackground_101_1095}
        />
        <View style={styles.View_101_1098}>
          <Text style={styles.Text_101_1098}>Gumroad</Text>
        </View>
      </View>
      <View style={styles.View_101_1099}>
        <Text style={styles.Text_101_1099}>
          https://munirsr.gumroad.com/l/Gofit-FitnessWorkoutAppUIKit
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da71c9d1-26b0-49a8-ac75-3153cdd68547"
        }}
        style={styles.ImageBackground_101_1100}
      />
      <View style={styles.View_101_1101}>
        <View style={styles.View_101_1102}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdd7a79b-d8f7-4055-841a-19c2e6942b46"
            }}
            style={styles.ImageBackground_101_1103}
          />
          <View style={styles.View_101_1104}>
            <Text style={styles.Text_101_1104}>Linkedin</Text>
          </View>
        </View>
        <View style={styles.View_101_1105}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82623365-43e2-4e4d-9c53-48ff4d68f18d"
            }}
            style={styles.ImageBackground_101_1106}
          />
          <View style={styles.View_101_1107}>
            <Text style={styles.Text_101_1107}>Dribbble</Text>
          </View>
        </View>
        <View style={styles.View_101_1108}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c2b64fd-11a0-402c-8861-3e52d68ca4ef"
            }}
            style={styles.ImageBackground_101_1109}
          />
          <View style={styles.View_101_1110}>
            <Text style={styles.Text_101_1110}>Behance</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_101_1111}>
        <View style={styles.View_101_1112}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/274ad7fe-4249-4375-9601-62be8d993c0f"
            }}
            style={styles.ImageBackground_101_1113}
          />
          <View style={styles.View_101_1114}>
            <Text style={styles.Text_101_1114}>Instagram</Text>
          </View>
        </View>
        <View style={styles.View_101_1115}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/638bf54b-b40a-48b5-bd13-0ab7296f4290"
            }}
            style={styles.ImageBackground_101_1116}
          />
          <View style={styles.View_101_1117}>
            <Text style={styles.Text_101_1117}>Figma Community</Text>
          </View>
        </View>
        <View style={styles.View_101_1118}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceac31ff-134b-4086-9501-01d6a7c6c931"
            }}
            style={styles.ImageBackground_101_1119}
          />
          <View style={styles.View_101_1120}>
            <Text style={styles.Text_101_1120}>Linktr.ee</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_101_1121}>
        <Text style={styles.Text_101_1121}>
          Want to donate? My PayPal account: sobakhul.munir527@gmail.com My
          Blockchain Wallet Address: 0x7131CA84856767f3126a2C75468de58848f8E696
        </Text>
      </View>
      <View style={styles.View_101_1122}>
        <Text style={styles.Text_101_1122}>
          Buy Me a Coffee 👇👇👇 https://www.buymeacoffee.com/MunirSr
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2a24672-e018-476f-b76f-814bedfa2791"
        }}
        style={styles.ImageBackground_101_1123}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(248, 250, 255, 1)" },
  View_2: { height: hp("358%") },
  View_101_1091: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("22%"),
    justifyContent: "center"
  },
  Text_101_1091: {
    color: "rgba(0, 24, 159, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1092: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_101_1092: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 48,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1093: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("87%"),
    justifyContent: "center"
  },
  Text_101_1093: {
    color: "rgba(0, 24, 159, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1094: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_101_1095: {
    width: wp("6%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_101_1098: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "center"
  },
  Text_101_1098: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1099: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("126%"),
    justifyContent: "center"
  },
  Text_101_1099: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_101_1100: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("145%")
  },
  View_101_1101: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_1102: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_101_1103: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_101_1104: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1104: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1105: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_101_1106: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_101_1107: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1107: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1108: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_101_1109: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_1110: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1110: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1111: {
    width: wp("80%"),
    minWidth: wp("80%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("168%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_101_1112: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_101_1113: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_101_1114: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1114: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1115: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_101_1116: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_101_1117: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1117: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1118: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_101_1119: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_101_1120: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_101_1120: {
    color: "rgba(48, 79, 254, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1121: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("183%"),
    justifyContent: "center"
  },
  Text_101_1121: {
    color: "rgba(0, 24, 159, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  View_101_1122: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("224%"),
    justifyContent: "center"
  },
  Text_101_1122: {
    color: "rgba(0, 24, 159, 1)",
    fontSize: 26,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.15000000596046448,
    textTransform: "none"
  },
  ImageBackground_101_1123: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("254%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
