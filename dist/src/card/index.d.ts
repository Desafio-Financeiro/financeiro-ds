import { SxProps, Theme } from "@mui/material";
import React, { JSX } from "react";
interface CardProps {
    sx?: SxProps<Theme>;
    title?: string;
    children: React.ReactNode;
    type: "default" | "primary" | "secondary";
}
export declare function Card({ sx, title, children, type }: CardProps): JSX.Element;
export {};
