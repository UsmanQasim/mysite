import React from "react";
import "./Styles/Main.scss";
import { Button, Text, Pane } from "evergreen-ui";

const Main = () => {
  return (
    <>
      <div className="Section_1">
        <Pane className="left_Section_1">
          <Text className="text_Section_1">
            We Provide Reliable Services Here
          </Text>
          <Button className="btn_Section_1">Readme More</Button>
        </Pane>
        <Pane className="right_Section_1">
          <img src="./undraw_temp.png" alt="age" width="50%" />
        </Pane>
      </div>
      <div className="Section_2">
        <Button>Section2</Button>
      </div>
      <div className="Section_3">
        <Button>Section2</Button>
      </div>
    </>
  );
};

export default Main;
