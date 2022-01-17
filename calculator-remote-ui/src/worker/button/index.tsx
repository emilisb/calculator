import React from "react";

interface Props {
  name: string;
  clickHandler: (name: string) => void;
  wide?: boolean;
  orange?: boolean;
}

const Button = (props: Props) => {
  const handleClick = () => {
    props.clickHandler(props.name);
  };

  return (
    <div style={{ ...styles.container, ...(props.wide ? styles.wide : {}) }}>
      <button
        onClick={handleClick}
        style={{
          ...styles.button,
          ...(props.orange ? styles.buttonOrange : {}),
        }}
      >
        {props.name}
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "inline-flex",
    width: "25%",
    flex: "1 0 auto",
    height: "59px",
  },

  wide: {
    width: "50%",
  },

  button: {
    backgroundColor: "#e0e0e0",
    border: 0,
    fontSize: "1.5rem",
    margin: "0 1px 0 0",
    flex: "1 0 auto",
    padding: 0,
  },

  buttonOrangeLast: {
    marginRight: 0,
  },

  buttonOrange: {
    backgroundColor: "#f5923e",
    color: "white",
  },
};

export default Button;
