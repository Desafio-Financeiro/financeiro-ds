import { SxProps, Theme } from "@mui/material";
import React, { JSX } from "react";
import type { MenuProps } from "../menu";
interface MenuItemProps extends Omit<MenuProps, "variant"> {
    sx?: SxProps<Theme>;
    active?: boolean;
    disabled?: boolean;
    children: React.ReactElement | string;
    handleClick: () => void;
}
export declare function MenuItem({ children, active, disabled, handleClick, sx, }: MenuItemProps): JSX.Element;
export {};
