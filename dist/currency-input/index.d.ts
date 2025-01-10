import { type SxProps, type Theme } from "@mui/material";
interface CurrencyInputProps {
    label?: string;
    defaultValue: string;
    onChange: (value: string) => void;
    sx?: SxProps<Theme>;
}
export declare function CurrencyInput({ label, defaultValue, onChange, sx, }: CurrencyInputProps): import("react/jsx-runtime").JSX.Element;
export {};
