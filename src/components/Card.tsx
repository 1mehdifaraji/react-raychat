import { FC } from "react";

import { HTMLDivProps } from "../types";

const Card: FC<HTMLDivProps> = ({
  children,
  title,
  className = "",
  ...props
}) => (
  <div
    className={`p-2 md:py-4 md:px-10 rounded-xl shadow-xl shadow-gray/50 border mt-10 md:mt-20 2xl:mt-32 md:max-w-2xl mx-auto ${className}`}
    {...props}
  >
    <div className="text-primary font-bold text-center text-2xl">{title}</div>
    {children}
  </div>
);

export default Card;
