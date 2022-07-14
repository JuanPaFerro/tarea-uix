("use strict");
import React, { useContext, useEffect, useState } from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { Context } from "../../Context/Contex";
import useConvertHexToRgba from "../../hooks/useConvertHexToRgba";

const CustomColorSketchPicker = () => {
  const {spaceColor,setSpaceColor, matchesSM } =
    useContext(Context);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(spaceColor);

  useEffect(() => {
    setColor(spaceColor);
  }, [spaceColor]);

  const handleClick = () => {
    setDisplayColorPicker((prev) => !prev);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);
   setSpaceColor(color.hex);
  };

  const styles = reactCSS({
    default: {
      container: {
        marginTop: "4px",
      },
      color: {
        width: "30px",
        height: "30px",
        borderRadius: "30px",
        background: color,
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "100%",
        boxShadow: `0 0 0 5px ${useConvertHexToRgba(color, "0.4")}`,
        display: "inline-block",
        cursor: "pointer",
        border: `1px solid ${color}`,
      },
      popover: {
        position: "absolute",
        right: `${matchesSM && "20px"}`,
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <div style={styles.container}>
      <div style={styles.swatch} onClick={handleClick}>
        <div style={styles.color} />
      </div>
      {displayColorPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={color}
            onChange={(color) => {
              handleChange(color);
            }}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CustomColorSketchPicker;
