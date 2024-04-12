import { FC } from "react";

import { Link } from ".";
import { getDate } from "../lib";

const Developer: FC = () => (
  <div className="text-center text-slate-600 font-light text-xs pt-4 pb-20">
    Developer{" "}
    <Link title="Mehdi Faraji" url="https://www.linkedin.com/in/mehdifaraji/" />{" "}
    {getDate()}
  </div>
);

export default Developer;
