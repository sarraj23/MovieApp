import { Image, Text, View } from "react-native";
import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
} from "native-base";

export default class Test extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "blue" }}>
        <Header>
          <Left />

          <Body>
            <Title>Header</Title>
            <Subtitle>Example subtitle</Subtitle>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
