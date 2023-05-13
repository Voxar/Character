import classNames from "classnames";
import { HTMLAttributes } from "react";

export interface IHeroInfo extends HTMLAttributes<HTMLDivElement> {
  name: string;
  avatarUrl: string;
  description: string;
  levelDescription: string;
  xp: string;
}

export default function HeroCard({
  name,
  avatarUrl,
  description,
  levelDescription,
  xp,
  ...props
}: IHeroInfo) {
  return (
    <div
      className={classNames("flex flex-row width-100 h-100", props.className)}
    >
      <img src={avatarUrl} className="rounded-md" alt="Hero" />
      <div className="flex flex-col items-start pl-3">
        <p className="text-xl">{name}</p>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{levelDescription}</p>
        <p className="text-sm">{xp}</p>
      </div>
    </div>
  );
}
