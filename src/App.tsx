import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroCard, { IHeroInfo } from "./Cards/HeroCard";
import AttributeCard from "./Cards/AttributeCard";
import SkillTable from "./Cards/SkillTable";
import SpellCard from "./Cards/SpellCard";

let hero = {
  name: "Hope",
  avatarUrl: "http://placekitten.com/100/100",
  description: "Female Tiefling Sourcerer",
  levelDescription: "Level 5",
  xp: "XP: 1456",

  attributes: [
    {
      name: "strength",
      value: 12,
      add: "+1",
    },
    {
      name: "dexterity",
      value: 14,
      add: "+2",
    },
    {
      name: "constitution",
      value: 14,
      add: "+2",
    },
    {
      name: "intelligence",
      value: 12,
      add: "+1",
    },
    {
      name: "wisdom",
      value: 10,
      add: "0",
    },
    {
      name: "charisma",
      value: 18,
      add: "+4",
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
};

function SkillBonus(
  skill: { mod: string },
  attributes: { name: string; value: number }[]
) {
  let attr = attributes.find((x) => x.name === skill.mod);
  if (attr === undefined) return 0;
  let val = (attr.value - 10) / 2;
  return (val >= 0 ? "+" : "-") + val.toString();
}

function App() {
  return (
    <div className="App p-20 bg-violet-900">
      <HeroCard {...hero} className="bg-violet-400" />
      <div className="flex flex-row my-2">
        {hero.attributes.map((attr) => (
          <AttributeCard
            {...attr}
            className="w-[100px] h-[100px] mr-1 rounded"
          />
        ))}
      </div>
      <div className="flex flex-row my-2">
        <SkillTable
          className="rounded p-2"
          skills={hero.skills.map((skill) => ({
            modifier: skill.mod.substring(0, 3).toUpperCase(),
            bonus: SkillBonus(skill, hero.attributes).toString(),
            ...skill,
          }))}
          attributes={hero.attributes}
        />
        <div className="flex flex-row gap-1 ml-2 bg-violet-300 rounded p-2">
          <SpellCard
            name={"FIREBALL"}
            level={"3rd-level evocation"}
            castTime={"1 action"}
            range={"150 feet"}
            components={"V, S, M"}
            duration={"Instantaneous"}
            description={
              "Matenal a tiny ball of bat guano and sultur A bright streak flashes from your pointing linger to a point you choose within range and then blossoms with a low roar into an explosion o lame. Each creature in a 20-toot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or hall as much damage on a successlul one. The hre spreads around corners. It tonices nammable obiects in the area that arent being worn or carried"
            }
            higherLevels={
              "When you cast this spell using a spell slot of 4th level or higher, the damage increases by lap for each slot level above 3rd"
            }
            school="ARCANE"
          />
          <SpellCard
            name={"THUNDERCLAP"}
            level={"Evocation cantrip"}
            castTime={"1 action"}
            range={"Self (5 foot radius)"}
            components={"S"}
            duration={"Instantaneous"}
            description={
              "You create a burst of thunderous sound, which can be heard 100 feet away. Each creature other than you within 5 feet of you must make a Constitution saving throw. On a failed save, the creature takes 1d6 thunder damage."
            }
            higherLevels={
              "The spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
            }
            school={"Elemental"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
