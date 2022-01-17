import React from "react";

interface Props {
  value: string;
}

const Display = (props: Props) => {
  return (
    // @ts-expect-error
    <div style={styles.container}>
      <div style={styles.text}>{props.value}</div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#858694",
    color: "white",
    textAlign: "right",
    fontWeight: 200,
    flex: "0 0 auto",
    width: "100%",
  },

  text: {
    fontSize: "2.5rem",
    padding: "0.2rem 0.7rem 0.1rem 0.5rem",
  },
};

export default Display;
