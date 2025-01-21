import { ButtonProps as MUIButtonProps } from "@mui/material";
import { JSX } from "react";
export interface ButtonProps {
    label: string;
    variant?: "outlined" | "contained";
    color?: "primary" | "secondary" | "tertiary" | "error" | "contrast";
    disabled?: boolean;
    sx?: MUIButtonProps["sx"];
    onClick: () => void;
    isLoading?: boolean;
}
export declare function Button({ label, variant, color, disabled, onClick, sx, isLoading, }: ButtonProps): JSX.Element;
