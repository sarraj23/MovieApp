import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Content,
} from "native-base";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
  Touchable,
} from "react-native";
import styled from "styled-components";

const Posterimage = styled.Image`
  width: 200;
  height: 200;
  align-self: center;
`;
const HomeWrapper = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 100px;
`;

const DetailsWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 35px;
  margin-bottom: 35px;
`;

const DetailsText = styled.Text`
  margin-right: 15px;
  margin-left: 15px;
`;

const Watchbutton = styled.Text`
  background-color: #a4b4de;
`;

const Home = () => {
  return (
    <Header>
      <HomeWrapper>
        <Posterimage source={{ uri: "https://bit.ly/2Q0iCUs" }} />
        <DetailsWrapper>
          <DetailsText>Genre</DetailsText>
          <DetailsText>Age</DetailsText>
          <DetailsText>Rating</DetailsText>
        </DetailsWrapper>
        <TouchableOpacity>
          <Watchbutton onPress={() => alert("Hello")}>Watch now</Watchbutton>
        </TouchableOpacity>
      </HomeWrapper>
    </Header>
  );
};

export default Home;
