import { FC } from "react";

import { HTMLDivProps } from "../types";

const Content: FC<HTMLDivProps> = ({ children, className = "" }) => (
  <div className={`text-justify mt-5 text-sm rtl ${className}`}>{children}</div>
);

export default Content;
