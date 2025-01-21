import React from "react";
interface HeaderProps {
    isLogged: boolean;
    userName?: string;
    children?: React.ReactNode;
    handleLogin?: VoidFunction;
    handleRegister?: VoidFunction;
}
export declare function Header({ isLogged, userName, children, handleLogin, handleRegister, }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
