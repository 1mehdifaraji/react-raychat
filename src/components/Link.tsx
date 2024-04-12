import { FC, HTMLProps } from "react";

interface LinkProps {
  url: string;
  title: string;
  className?: HTMLProps<HTMLDivElement>["className"];
}

const Link: FC<LinkProps> = ({ title, url, className = "" }) => (
  <div className="inline">
    <a
      className={`text-sky-600 text-xs underline mx-1 ${className}`}
      target="_blank"
      rel="noreferrer"
      href={url}
    >
      {title}
    </a>
  </div>
);

export default Link;
