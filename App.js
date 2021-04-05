import React from "react";
import Test from "./component/test";
import styled from "styled-components";
import { View, Button } from "native-base";
import Home from "./component/Home";

const StyledButton = styled(Button)`
  border-radius: 20;
  background-color: red;
`;
const Textstyled = styled.Text`
  font-size: 20;
  justify-content: center;
  align-self: center;
`;
function App() {
  return <Home />;
}

export default App;
