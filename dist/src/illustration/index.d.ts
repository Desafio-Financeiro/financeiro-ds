import { JSX } from "react";
import { illustrationsMapped } from "./illustrationMapped";
type IllustrationType = keyof typeof illustrationsMapped;
interface IllustrationProps {
    name: IllustrationType;
    width?: number;
    height?: number;
}
export declare function Illustration({ name, width, height, }: IllustrationProps): JSX.Element;
export {};
