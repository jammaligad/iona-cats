import { FC } from "react";
import cn from "classnames";

const styles: Record<string, string> = {
  default: "text-yellow-800 bg-orange-100",
  info: "text-blue-600 bg-blue-200",
  error: "text-rose-600 bg-rose-200",
  success: "text-green-600 bg-green-200",
  warning: "text-amber-600 bg-amber-200",
};

interface Props {
  value: string;
  type: string;
}

const Badge: FC<Props> = ({ value, type }) => {
  return (
    <div
      className={cn(
        "rounded-lg px-2 py-1 h-min text-sm whitespace-nowrap m-1",
        styles[type]
      )}
    >
      {value}
    </div>
  );
};

export default Badge;
