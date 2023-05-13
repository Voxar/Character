import classNames from "classnames";
import { HTMLAttributes } from "react";

export interface ISkillTableProps extends HTMLAttributes<HTMLDivElement> {
  skills: {
    name: string;
    modifier: string;
    prof: boolean;
    bonus: string;
  }[];
  attributes: {
    name: string;
    value: number;
  }[];
}

export default function SkillTable({
  skills,
  attributes,
  ...props
}: ISkillTableProps) {
  return (
    <div
      className={classNames(
        "grid grid-cols-[auto,auto,auto,1fr] bg-rose-100",
        props.className
      )}
    >
      {skills.map((skill) => (
        <>
          <p className="mx-1 text-sm">{skill.prof ? "●" : "○"}</p>
          <p className="mx-1 text-sm">{skill.modifier}</p>
          <p className="mx-1 text-sm">{skill.bonus}</p>
          <p className="mx-1 text-sm text-left">{skill.name}</p>
        </>
      ))}
    </div>
  );
}
