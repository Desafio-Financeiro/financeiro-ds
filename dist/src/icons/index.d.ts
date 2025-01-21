import React, { JSX } from "react";
import type { IconNames } from "./iconNames";
export interface IconProps {
    name: IconNames;
    color?: string;
    size?: number;
    styles?: React.CSSProperties;
}
export declare function Icons({ name, size, color, styles, }: IconProps): JSX.Element;
