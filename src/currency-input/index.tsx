import {
  Stack,
  TextField,
  FormLabel,
  useTheme,
  type SxProps,
  type Theme,
} from "@mui/material";
import React ,{JSX, useEffect, useState } from "react";
import { formatCurrency } from "../utils";

interface CurrencyInputProps {
  label?: string;
  defaultValue: string;
  onChange: (value: string) => void;
  sx?: SxProps<Theme>;
}



export function CurrencyInput({
  label,
  defaultValue,
  onChange,
  sx,
}: CurrencyInputProps) {
  const [value, setValue] = useState(defaultValue);
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d]/g, "");
    const formattedValue = formatCurrency(inputValue);
    setValue(formattedValue);
    onChange(inputValue);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <Stack spacing="16px" width="250px" sx={sx}>
      {label && (
        <FormLabel sx={{ color: theme.palette.primary.dark }}>
          {label}
        </FormLabel>
      )}
      <TextField
        value={value}
        onChange={handleChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            background: theme.palette.common.white,
            borderRadius: "8px",
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
            },
          },
        }}
        InputProps={{
          inputProps: {
            style: { textAlign: "center" },
          },
        }}
      />
    </Stack>
  );
}
