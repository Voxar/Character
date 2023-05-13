import classNames from "classnames";
import { HTMLAttributes } from "react";
import { AttributeCard2 } from "./AttributeCard";

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

const SkillTable = SkillTable1;
export default SkillTable;

export function SkillTable2({
  skills,
  attributes,
  ...props
}: ISkillTableProps) {
  const maybeBold = (value: any, isBold: boolean) =>
    isBold ? <span className="font-bold">{value}</span> : value;
  return (
    <div
      className={classNames(
        "grid grid-cols-auto md:grid-cols-[1fr,auto]",
        props.className
      )}
    >
      {skills.map((skill, index) => (
        <>
          <p className="mx-1 text-sm text-left" key={"a" + index}>
            {/* <span className="mx-1 text-xs">{skill.prof ? "●" : "○"}</span> */}

            {maybeBold(skill.name, skill.prof)}
          </p>
          <p className="mx-1 text-sm hidden md:flex" key={"b" + index}>
            {maybeBold(skill.bonus, skill.prof)}
          </p>
        </>
      ))}
    </div>
  );
}

export function SkillTable1({
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
