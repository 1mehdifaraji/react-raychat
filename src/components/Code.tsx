import { FC } from "react";

interface CodeProps {
  code: string;
}

const Code: FC<CodeProps> = ({ code }) => (
  <code className="rounded-md p-1 mx-1 text-xs bg-slate-600 text-white">
    {code}
  </code>
);

export default Code;
