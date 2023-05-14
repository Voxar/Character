import { HTMLAttributes, useState } from "react";
import SpellCard, { SpellCardProps } from "./SpellCard";
import classNames from "classnames";
import { hover } from "@testing-library/user-event/dist/hover";
import { ISpell } from "../Models/ISpell";
import pluralize from "pluralize";

export interface SpellCardStackProps extends HTMLAttributes<HTMLDivElement> {
  spells: SpellCardProps[];
  width: string;
}

export default function SpellCardStack({
  spells,
  width,
  ...props
}: SpellCardStackProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className={classNames("relative w-[300px]", props.className)}>
      {spells.map((spell, index) => (
        <div
          key={"List " + index}
          className="hover:z-10 cursor-pointer rounded-[20px]"
          style={{
            position: "absolute",
            zIndex:
              hoveredIndex === index
                ? 1000
                : (hoveredIndex ?? 9999) > index
                ? index
                : 900 - index,
            left: 0,
            top: index * 45,
            transition:
              "box-shadow 0.3s ease-in-out, scale 0.3s ease-in-out, z-index 0.3s ease-in-out",
            boxShadow: `0px 2px ${
              hoveredIndex === index ? 50 : 5
            }px 2px rgba(0, 0, 0, 1)`,
            scale: `${hoveredIndex === index ? 1.03 : 1}`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <SpellCard {...spell} key={index} className={`w-[${width}]`} />
        </div>
      ))}
    </div>
  );
}

function groupSpellsByLevel(spells: ISpell[]): ISpell[][] {
  const result: ISpell[][] = [];

  // Group the spells by level
  const spellMap = spells.reduce((map, spell) => {
    const level = spell.level;
    if (!map.has(level)) {
      map.set(level, []);
    }
    const spellList = map.get(level) || [];
    spellList.push(spell);
    map.set(level, spellList);
    return map;
  }, new Map<number, ISpell[]>());

  // Convert the spell map to a list of lists
  spellMap.forEach((spellList, level) => {
    result[level] = spellList;
  });

  return result;
}
function SpellForSpellCard(spell: ISpell): SpellCardProps {
  const castTimeString = `${spell.castTime.count} ${pluralize(
    spell.castTime.type
  )}`;
  const rangeString = spell.range.count
    ? `${spell.range.count} ${pluralize(spell.range.unit)}`
    : spell.range.unit.toString();
  const componentString = spell.components
    .map((component) => component.short)
    .join(", ");
  const durationString = spell.duration.count
    ? `${spell.duration.count} ${pluralize(spell.duration.unit.toString())}`
    : spell.duration.unit.toString();

  return {
    name: spell.name,
    level: spell.levelString,
    castTime: castTimeString,
    range: rangeString,
    components: componentString,
    duration: durationString,
    description: spell.description,
    higherLevels: spell.higherLevels,
    school: spell.school,
  };
}

export function SpellCardStackSection({ spells }: { spells: ISpell[] }) {
  const spellsByLevel = groupSpellsByLevel(spells);
  return (
    <div className="flex flex-row gap-1 bg-violet-300 rounded p-2">
      {spellsByLevel.map((spells, levelIndex) => (
        <div className="relative w-[300px]" key={levelIndex}>
          <div className="flex flex-row items-center justify-between m-3">
            <p className="text-left font-dragon-hunter">
              {levelIndex === 0 ? "Cantrips" : `Level ${levelIndex} Spells`}
            </p>
            <div className="flex gap-1">
              <input type="checkbox" />
              <input type="checkbox" />
              <input type="checkbox" />
            </div>
          </div>

          <SpellCardStack
            spells={spells.map(SpellForSpellCard)}
            className="w-300px h-full"
            width="300px"
          />
        </div>
      ))}
    </div>
  );
}
