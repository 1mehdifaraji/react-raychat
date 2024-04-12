import { FC } from "react";

import { HTMLDivProps } from "../types";

const Warning: FC<HTMLDivProps> = ({ children }) => (
  <div className="mt-1 bg-yellow-100 text-yellow-600 rounded-lg p-2 max-w-max">
    {children}
  </div>
);

export default Warning;
