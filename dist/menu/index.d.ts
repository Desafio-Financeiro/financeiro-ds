import { SxProps, Theme } from "@mui/material";
import React, { JSX } from "react";
export interface MenuProps {
    variant: "full" | "compact";
    iconColor?: "primary" | "secondary";
    children: React.ReactNode | string;
    anchorElem?: HTMLElement | null;
    sx?: SxProps<Theme>;
}
declare function Menu({ variant, children, anchorElem, iconColor, sx, }: MenuProps): JSX.Element;
declare namespace Menu {
    var MenuItem: typeof import("../menuItem").MenuItem;
}
export default Menu;
