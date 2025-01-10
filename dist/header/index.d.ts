import React from "react";
interface HeaderProps {
    isLogged: boolean;
    userName?: string;
    children?: React.ReactNode;
}
export declare function Header({ isLogged, userName, children }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
