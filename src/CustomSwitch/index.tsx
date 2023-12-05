import React from "react";
import { Switch, SwitchProps } from "antd";
import styled from "@emotion/styled";
import { Interpolation, Theme } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { AddImportantToStyles } from "../ThemeProvider";

interface CustomSwitchProps {
  customStyle?: Interpolation<Theme>;
}

const StyledSwitch = styled(Switch)(
  (props: CustomSwitchProps & SwitchProps) => {
    const { colorScheme } = useContext(ThemeContext);
    const baseStyle = {
      "&.ant-switch-checked": {
        backgroundColor: `${colorScheme?.accent || "pink"} !important`,
      },
      "&.ant-switch-checked .ant-switch-handle::before": {
        backgroundColor: `${colorScheme?.main || "#fff"}!important`,
      },
      "&.ant-switch-checked .ant-switch-loading-icon": {
        color: `${colorScheme?.text || "red"}!important`,
      },
      "& .ant-wave": {
        "--wave-color": `${colorScheme?.accent || "red"} !important`,
      },
    };
    const importantCustomStyle = AddImportantToStyles(props.customStyle);

    return [baseStyle, importantCustomStyle];
  }
);

export default function CustomSwitch(props: SwitchProps & CustomSwitchProps) {
  return <StyledSwitch {...props} />;
}
