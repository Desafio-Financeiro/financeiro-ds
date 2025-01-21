import { JSX } from "react";
interface ModalProps {
    title: string;
    handleClose: () => void;
    handleConfirm: () => void;
    open: boolean;
    content: JSX.Element;
    confirmButtonText?: string;
    cancelButtonText?: string;
}
export declare function Modal({ title, handleClose, handleConfirm, content, open, confirmButtonText, cancelButtonText, }: ModalProps): import("react/jsx-runtime").JSX.Element;
export {};
