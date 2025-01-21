import React, { JSX } from "react";

import { Stack, useTheme } from "@mui/material";
import { Button } from "../button";
import theme from "../theme";

interface ActionsProps {
  handleLogin?: VoidFunction;
  handleRegister?: VoidFunction;
}

export function Actions({ handleLogin, handleRegister }: ActionsProps) {
  const { breakpoints, spacing } = useTheme();
  return (
    <Stack
      width="fit-content"
      direction="row"
      gap={spacing("large")}
      sx={{
        display: "flex",
        [breakpoints.down("sm")]: {
          display: "none",
        },
      }}
    >
      <Button
        variant="contained"
        color="primary"
        label={"Abrir minha conta"}
        onClick={() => {
          if (handleRegister) handleRegister();
        }}
        sx={{ display: { xs: "none", lg: "block" } }}
      />

      <Button
        variant="contained"
        color="primary"
        label={"Abrir conta"}
        onClick={() => {
          if (handleLogin) handleLogin();
        }}
        sx={{ display: { xs: "block", lg: "none" } }}
      />

      <Button
        variant="outlined"
        color="primary"
        label="Já tenho conta"
        onClick={() => console.log("Acessar minha conta")}
      />
    </Stack>
  );
}
