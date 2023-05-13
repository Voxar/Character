import classNames from "classnames";
import { HTMLAttributes } from "react";

export interface IAttributeInfo extends HTMLAttributes<HTMLDivElement> {
  name: string;
  value: number;
  modifier: string;
}

const AttributeCard = AttributeCard2;
export default AttributeCard;

export function AttributeCard2({
  name,
  value,
  modifier,
  ...props
}: IAttributeInfo) {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        "flex flex-col content-center bg-rose-200 pb-0 mb-0"
      )}
    >
      <div className="grow"></div>
      <div className="grow text-4xl font-bold text-center py-2">
        <p>{modifier}</p>
      </div>
      <div className="uppercase text-xs font-semibold text-center py-1">
        <p>{name}</p>
      </div>
      <div className="text-sm bg-rose-100 border-t-1 border-black">
        <p>{value}</p>
      </div>
    </div>
  );
}

export function AttributeCard1({
  name,
  value,
  modifier,
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
      <div className="text-4xl font-bold text-center">{modifier}</div>
      <div className="text-sm bg-rose-100 rounded-full w-1/2 mb-0">{value}</div>
    </div>
  );
}
