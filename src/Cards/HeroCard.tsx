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
      className={classNames(
        "herocard flex flex-row width-100 h-100",
        props.className
      )}
    >
      <img src={avatarUrl} className="rounded-md" alt="Hero" />
      <div className="flex flex-col items-start pl-3">
        <p className="text-xl">{name}</p>
        <p className="text-sm">{description}</p>
        <p className="text-sm">{levelDescription}</p>
        <p className="text-sm">{xp}</p>
      </div>
      <div className="stats flex flex-row">
        <div className="stat grid grid-cols-[1fr,auto] content-start">
          <p>Age</p>
          <p>32</p>
          <p>Speed</p>
          <p>30</p>
        </div>
        <div className="stat grid grid-cols-[1fr,auto] content-start">
          <p>Proficiency</p>
          <p>+3</p>
          <p>Initiatie</p>
          <p>+3</p>
        </div>
        <div className="stat grid grid-cols-[1fr,auto] content-start">
          <p>AC</p>
          <p>15</p>
          <p>Save DC</p>
          <p>15</p>
          <p>Spell DC</p>
          <p>15</p>
        </div>
        <div className="stat flex flex-row">
          <div className="w-[60px]">
            <p className="hp-title">Current</p>
            <p className="hp-value">32</p>
          </div>
          <div>
            <p className="hp-title">&nbsp;</p>
            <p className="hp-value text-gray-700">/</p>
          </div>
          <div className="w-[60px]">
            <p className="hp-title">Max</p>
            <p className="hp-value">32</p>
          </div>
          <div className="w-[60px]">
            <p className="hp-title">Temp</p>
            <p className="hp-value">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
