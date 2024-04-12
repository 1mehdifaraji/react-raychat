import { FC } from "react";

import { HTMLDivProps } from "../types";

const Container: FC<HTMLDivProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`container mx-auto px-4 ${className}`} {...props}>
    {children}
  </div>
);

export default Container;
