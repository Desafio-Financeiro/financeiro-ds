import { SelectChangeEvent } from "@mui/material";
interface SelectProps {
    value?: string;
    label?: string;
    onChange: (e: SelectChangeEvent) => void;
    options: {
        value: string;
        label: string;
    }[];
    placeholder: string;
}
export declare function Select({ value, onChange, options, placeholder, label, }: SelectProps): import("react/jsx-runtime").JSX.Element;
export {};
