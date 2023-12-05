import React from "react";
import { useContext } from "react";
import styled from "@emotion/styled";
import { AddImportantToStyles } from "../ThemeProvider";
import { Interpolation, Theme } from "@emotion/react";
import { ThemeContext } from "../ThemeProvider";
import { Button, ButtonProps } from "antd";

interface CustomButtonProps {
  customStyle?: Interpolation<Theme>;
}

const StyledButton = styled(Button)<CustomButtonProps & ButtonProps>(
  (props: CustomButtonProps & ButtonProps) => {
    const { colorScheme, fontSize, fontFamily, size } =
      useContext(ThemeContext);

    const baseStyles = {
      width: "auto",
      height: "auto",
      padding:
        size === "large"
          ? "20px 40px"
          : size === "middle"
          ? "10px 15px"
          : size === "small"
          ? "5px 10px"
          : "10px 20px",

      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      boxShadow: "2px 2px 5px 0px #AFB6B8",
      transition: "all 0.25s ease-in-out",
      marginLeft: "10px",
      backgroundColor: `${colorScheme?.main || "lightblue"}`,
      fontSize: `${fontSize?.t3 || 14}px`,
      color: `${colorScheme?.text || "black"}`,
      fontFamily: fontFamily,
      "&:not(.ant-btn-loading):hover": {
        color: "white !important",
        backgroundColor: `${colorScheme?.accent || "pink"}`,
      },
      "& .ant-wave": {
        "--wave-color": `${colorScheme?.accent || "lightgray"} !important`,
      },
      "&.ant-btn-loading": { cursor: "not-allowed" },
    };

    const importantCustomStyles = AddImportantToStyles(props.customStyle);
    return [baseStyles, importantCustomStyles];
  }
);

export default (props: CustomButtonProps & ButtonProps) => {
  return (
    <div>
      <StyledButton {...props}>{props.children}</StyledButton>
    </div>
  );
};
