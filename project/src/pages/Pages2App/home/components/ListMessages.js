import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RenderSendMessage from "./renderSendMessage";
import RenderResMessage from "./renderResMessage";

const ListMessages = () => {
  return (
    <View>
      <RenderSendMessage />
      <RenderResMessage />
    </View>
  );
};

export default ListMessages;

const styles = StyleSheet.create({});
