import cn from "classnames";

const widthClasses = [
  "w-12",
  "w-14",
  "w-16",
  "w-20",
  "w-24",
  "w-28",
  "w-32",
  "w-36",
];

export const ListItemPlaceholder = () => {
  const textWidth =
    widthClasses[Math.floor(Math.random() * widthClasses.length)];

  return (
    <div className="w-full flex p-2 space-x-2">
      <div className="w-6 h-6 rounded-full animate-pulse bg-orange-100" />
      <div
        className={cn(
          "h-6 rounded-full animate-pulse bg-orange-100",
          textWidth
        )}
      />
    </div>
  );
};
