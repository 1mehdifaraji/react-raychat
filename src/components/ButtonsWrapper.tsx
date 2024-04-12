import { FC } from "react";

import { HTMLDivProps } from "../types";

const ButtonsWrapper: FC<HTMLDivProps> = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-1 justify-items-center mt-4">
    {children}
  </div>
);

export default ButtonsWrapper;
