import { FC } from "react";

import { HTMLDivProps } from "../types";

const Title: FC<HTMLDivProps> = ({ children }) => (
  <div className="text-lg !font-bold text-right">{children}</div>
);

export default Title;
