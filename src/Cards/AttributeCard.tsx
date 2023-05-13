import classNames from "classnames";
import { HTMLAttributes } from "react";

export interface IAttributeInfo extends HTMLAttributes<HTMLDivElement> {
  name: string;
  value: number;
  add: string;
}

export default function AttributeCard({
  name,
  value,
  add,
  ...props
}: IAttributeInfo) {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        "flex flex-col justify-center items-center bg-rose-200 pb-0 mb-0"
      )}
    >
      <div className="uppercase text-xs font-semibold text-center">{name}</div>
      <div className="text-4xl font-bold text-center">{add}</div>
      <div className="text-sm bg-rose-100 rounded-full w-1/2 mb-0">{value}</div>
    </div>
  );
}
