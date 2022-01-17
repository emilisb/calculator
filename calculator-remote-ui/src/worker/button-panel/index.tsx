import React from "react";
import Button from "../button";

interface Props {
  clickHandler: (buttonName: string) => void;
}

const ButtonPanel = (props: Props) => {
  const handleClick = (buttonName: string) => {
    props.clickHandler(buttonName);
  };

  return (
    // @ts-expect-error
    <div style={styles.container}>
      <div style={styles.section}>
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} orange />
      </div>
      <div style={styles.section}>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} orange />
      </div>
      <div style={styles.section}>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} orange />
      </div>
      <div style={styles.section}>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} orange />
      </div>
      <div style={styles.section}>
        <Button name="0" clickHandler={handleClick} wide />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} orange />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#858694",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    flex: "1 0 auto",
  },

  section: {
    width: "100%",
    marginBottom: "1px",
    flex: "1 0 auto",
    display: "flex",
  },
};

export default ButtonPanel;
