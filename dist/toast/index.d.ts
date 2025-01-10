import { JSX } from "react";
import { SnackbarOrigin } from "@mui/material";
export interface ToastProps {
    isOpen: boolean;
    content: string | JSX.Element;
    type: "info" | "success" | "error" | "warning";
    handleClose: () => void;
    anchorOrigin?: SnackbarOrigin;
}
export declare function Toast({ handleClose, isOpen, type, content, anchorOrigin, }: ToastProps): JSX.Element;
