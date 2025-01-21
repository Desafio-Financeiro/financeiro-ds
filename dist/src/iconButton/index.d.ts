import React, { JSX } from "react";
import { IconButtonProps as MUIIconButtonProps } from "@mui/material";
import { IconProps } from "../icons";
export interface IconButtonProps extends MUIIconButtonProps {
    icon: IconProps["name"];
    iconColor?: string;
    iconSize?: number;
    variant?: "default" | "dark";
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export declare function IconButton({ icon, iconColor, iconSize, variant, disabled, onClick, ...props }: IconButtonProps): JSX.Element;
