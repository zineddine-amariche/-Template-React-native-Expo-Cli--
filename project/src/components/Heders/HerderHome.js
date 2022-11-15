import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import hederLogo from "../../Assets/img/hederLogo.png";
import user from "../../Assets/img/user.png";

import VectorStroke from "../../Assets/img/VectorStroke.png";
import HView from "../HView/HView";
const HerderHome = () => {
  return (
    <View
      style={{ height: 70, paddingHorizontal: 20, justifyContent: "center" }}
    >
      <HView spaceBetween style={{ alignItems: "center" }}>
        <Image source={hederLogo} style={{ width: 52, height: 52 }} />
        <TouchableOpacity>
          <HView>
            <Image source={user} style={{ marginHorizontal: 10 }} />
            <Image source={VectorStroke} />
          </HView>
        </TouchableOpacity>
      </HView>
    </View>
  );
};

export default HerderHome;

const styles = StyleSheet.create({});
