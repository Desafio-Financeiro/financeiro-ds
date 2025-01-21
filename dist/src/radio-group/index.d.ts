import React from "react";
import type { ChangeEvent } from "react";
import { type SxProps, type Theme } from "@mui/material";
interface RadioGroupProps {
    label: string;
    inputName: string;
    value: string;
    children: React.ReactElement;
    handleChange: (event: ChangeEvent<HTMLInputElement>, value: string) => void;
    sx?: SxProps<Theme>;
    radioGroupSx?: SxProps<Theme>;
}
interface RadioButtonProps {
    label: string;
    value: string;
}
declare function RadioGroup({ label, inputName, value, children, handleChange, sx, radioGroupSx, }: RadioGroupProps): import("react/jsx-runtime").JSX.Element;
declare namespace RadioGroup {
    var RadioButton: ({ value, label }: RadioButtonProps) => import("react/jsx-runtime").JSX.Element;
}
export default RadioGroup;
