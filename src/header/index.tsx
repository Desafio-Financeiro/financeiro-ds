import React, { JSX } from "react";
import { Stack, useTheme } from "@mui/material";

import { LoggedContent } from "./logged-content";
import { PublicContent } from "./public-content";

interface HeaderProps {
  isLogged: boolean;
  userName?: string;
  children?: React.ReactNode;

  handleLogin?: VoidFunction;
  handleRegister?: VoidFunction;
}

export function Header({
  isLogged,
  userName,
  children,
  handleLogin,
  handleRegister,
}: HeaderProps) {
  const { palette } = useTheme();

  return (
    <Stack
      component="header"
      width="100%"
      direction="row"
      height="94px"
      alignItems="center"
      bgcolor={isLogged ? palette.action.active : palette.common.black}
    >
      {isLogged ? (
        <LoggedContent userName={userName}>{children}</LoggedContent>
      ) : (
        <PublicContent
          handleLogin={handleLogin}
          handleRegister={handleRegister}
        />
      )}
    </Stack>
  );
}
