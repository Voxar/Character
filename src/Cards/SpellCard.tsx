import classNames from "classnames";
import { HTMLAttributes } from "react";

interface ISpell {}

export interface SpellCardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  level: string;
  castTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
  higherLevels: string;
  school: string;
}

export default function SpellCard({ ...props }: SpellCardProps) {
  return (
    <div
      className={classNames(
        "flex flex-col bg-red-700 w-[350px] font-bold pt-1 h-full rounded-[20px]",
        props.className
      )}
    >
      <div className="flex flex-col rounded-xl bg-white m-5 mb-0 grow">
        <div className="text-xl font-extrabold font-dragon-hunter tracking-widest">
          {props.name}
        </div>
        <div className="bg-red-700 text-xs text-white p-1">{props.level}</div>
        <div className="grid grid-cols-[auto,auto]">
          <div className="border-b-4 border-r-2 border-red-700">
            <p className="text-red-700 font-extrabold font-dragon-hunter tracking-widest">
              CASTING TIME
            </p>
            <p>{props.castTime}</p>
          </div>
          <div className="border-b-4 border-l-2 border-red-700">
            <p className="text-red-700 font-extrabold font-dragon-hunter tracking-widest">
              RANGE
            </p>
            <p>{props.range}</p>
          </div>
          <div className="border-r-2 border-red-700">
            <p className="text-red-700 font-extrabold font-dragon-hunter tracking-widest">
              COMPONENTS
            </p>
            <p>{props.components}</p>
          </div>
          <div className="border-l-2 border-red-700">
            <p className="text-red-700 font-extrabold font-dragon-hunter tracking-widest">
              DURATION
            </p>
            <p>{props.duration}</p>
          </div>
        </div>
        <div className="bg-red-700 text-xs p-1">&nbsp;</div>

        <div className="text-xs text-left p-3 grow">
          <p>{props.description}</p>
        </div>
        <div className="bg-red-700 text-white text-xs p-1">
          <p>At Higher Levels</p>
        </div>
        <div className="text-xs text-left p-3">
          <p>{props.higherLevels}</p>
        </div>
      </div>
      <div>
        <div className="flex flex-row items-center place-content-between h-auto font-extrabold text-left text-white p-2 px-5">
          <p>
            <span className="text-xl font-dragon-hunter tracking-widest">
              {props.school.substring(0, 1)}
            </span>
            {props.school.substring(1)}
          </p>
          <img className="h-8 fill-white" src="DnD Logo.svg" alt="D&D" />
        </div>
      </div>
    </div>
  );
}
