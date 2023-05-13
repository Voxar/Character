import pluralize from "pluralize";
import "./App.css";
import { AttributeCard2 } from "./Cards/AttributeCard";
import HeroCard from "./Cards/HeroCard";
import { SkillTable2 } from "./Cards/SkillTable";
import SpellCard, { SpellCardProps } from "./Cards/SpellCard";
import * as Spells from "./Data/Spells";
import { ISpell } from "./Models/ISpell";
import { useState } from "react";
import SpellCardStack from "./Cards/SpellCardStack";

let hero = {
  name: "Hope",
  avatarUrl: "http://placekitten.com/100/100",
  description: "Female Tiefling Sourcerer",
  levelDescription: "Level 5",
  xp: "XP: 1456",
  proficiencyBonus: 3,

  attributes: [
    {
      name: "strength",
      value: 12,
      modifier: "+1",
    },
    {
      name: "dexterity",
      value: 14,
      modifier: "+2",
    },
    {
      name: "constitution",
      value: 14,
      modifier: "+2",
    },
    {
      name: "intelligence",
      value: 12,
      modifier: "+1",
    },
    {
      name: "wisdom",
      value: 10,
      modifier: "0",
    },
    {
      name: "charisma",
      value: 18,
      modifier: "+4",
    },
  ],

  skills: [
    {
      name: "Acrobatics",
      mod: "dexterity",
      prof: false,
    },
    {
      name: "Animal Handling",
      mod: "wisdom",
      prof: false,
    },
    {
      name: "Arcana",
      mod: "intelligence",
      prof: true,
    },
    {
      name: "Athletics",
      mod: "strength",
      prof: false,
    },
    {
      name: "Deception",
      mod: "charisma",
      prof: false,
    },
    {
      name: "History",
      mod: "intelligence",
      prof: true,
    },
    {
      name: "Insight",
      mod: "wisdom",
      prof: true,
    },
    {
      name: "Intimidation",
      mod: "charisma",
      prof: false,
    },
    {
      name: "Investigation",
      mod: "intelligence",
      prof: false,
    },
    {
      name: "Medicine",
      mod: "wisdom",
      prof: false,
    },
    {
      name: "Nature",
      mod: "intelligence",
      prof: false,
    },
    {
      name: "Perception",
      mod: "wisdom",
      prof: false,
    },
    {
      name: "Performance",
      mod: "charisma",
      prof: false,
    },
    {
      name: "Persuasion",
      mod: "charisma",
      prof: false,
    },
    {
      name: "Religion",
      mod: "intelligence",
      prof: false,
    },
    {
      name: "Sleight of Hand",
      mod: "dexterity",
      prof: false,
    },
    {
      name: "Stealth",
      mod: "dexterity",
      prof: false,
    },
    {
      name: "Survival",
      mod: "wisdom",
      prof: true,
    },
  ],

  spells: Spells.default,
};

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

function SkillBonus(
  skill: { mod: string; prof: boolean },
  attributes: { name: string; value: number }[],
  heroProfBonus: number
) {
  let attr = attributes.find((x) => x.name === skill.mod);
  if (attr === undefined) return 0;
  let val = (attr.value - 10) / 2 + (skill.prof ? heroProfBonus : 0);
  return (val >= 0 ? "+" : "-") + val.toString();
}

function App() {
  const colCount = hero.attributes.length;
  const spellsByLevel = groupSpellsByLevel(hero.spells);

  return (
    <div className="App p-20 bg-violet-900">
      <HeroCard {...hero} className="bg-violet-400" />
      <div className={`grid grid-cols-${colCount} grid-flow-col gap-1`}>
        {hero.attributes.map((attr, index) => (
          <div className="bg-rose-100 rounded" key={index}>
            <AttributeCard2
              className="rounded grow-0"
              name={attr.name}
              value={attr.value}
              modifier={attr.modifier}
            />
            <SkillTable2
              className="border-t-2 border-black p-2 grow-0 w-auto"
              skills={hero.skills
                .filter((skill) => skill.mod === attr.name)
                .map((skill) => ({
                  modifier: skill.mod.substring(0, 3).toUpperCase(),
                  bonus: SkillBonus(
                    skill,
                    hero.attributes,
                    hero.proficiencyBonus
                  ).toString(),
                  ...skill,
                }))}
              attributes={hero.attributes}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row my-2">
        <div className="flex flex-row gap-1 bg-violet-300 rounded p-2">
          {spellsByLevel.map((spells, levelIndex) => (
            <div className="relative w-[300px]" key={levelIndex}>
              <SpellCardStack
                spells={spells.map(SpellForSpellCard)}
                className="w-300px h-full"
                width="300px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
