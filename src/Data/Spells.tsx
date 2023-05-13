import {
  ISpell,
  CastTimeUnit,
  RangeUnit,
  DurationUnit,
  AreaOfEffectShape,
} from "../Models/ISpell";

export const RealSpells: ISpell[] = [
  {
    name: "Fireball",
    level: 3,
    levelString: "3rd-level evocation",
    castTime: {
      count: 1,
      type: CastTimeUnit.Action,
    },
    range: {
      count: 150,
      unit: RangeUnit.Feet,
    },
    components: [
      { short: "V" },
      { short: "S" },
      { short: "M", description: "a tiny ball of bat guano and sulfur" },
    ],
    duration: {
      count: undefined,
      unit: DurationUnit.Instantaneous,
    },
    description:
      "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.",
    higherLevels:
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
    school: "evocation",
    radius: {
      count: 20,
      unit: RangeUnit.Feet,
      shape: AreaOfEffectShape.Sphere,
    },
  },
  {
    name: "Cure Wounds",
    level: 1,
    levelString: "1st-level evocation",
    castTime: {
      count: 1,
      type: CastTimeUnit.Action,
    },
    range: {
      count: undefined,
      unit: RangeUnit.Touch,
    },
    components: [{ short: "V" }, { short: "S" }],
    duration: {
      count: undefined,
      unit: DurationUnit.Instantaneous,
    },
    description:
      "A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.",
    higherLevels:
      "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
    school: "evocation",
  },
  {
    name: "Bless",
    level: 1,
    levelString: "1st-level enchantment",
    castTime: {
      count: 1,
      type: CastTimeUnit.Action,
    },
    range: {
      count: 30,
      unit: RangeUnit.Feet,
    },
    components: [
      { short: "V" },
      { short: "S" },
      { short: "M", description: "a sprinkling of holy water" },
    ],
    duration: {
      count: 1,
      unit: DurationUnit.Minute,
    },
    description:
      "You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.",
    higherLevels:
      "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    school: "enchantment",
    radius: {
      count: 30,
      unit: RangeUnit.Feet,
      shape: AreaOfEffectShape.Radius,
    },
  },
];

export const FunSpells: ISpell[] = [
  {
    name: "Rain of Stars",
    level: 5,
    levelString: "5th-level evocation",
    castTime: {
      count: 1,
      type: CastTimeUnit.Action,
    },
    range: {
      count: 120,
      unit: RangeUnit.Feet,
    },
    components: [{ short: "V" }, { short: "S" }],
    duration: {
      count: undefined,
      unit: DurationUnit.Instantaneous,
    },
    description:
      "You call forth a shower of shooting stars to rain down on a 40-foot radius area within range. Each creature in the area must make a Dexterity saving throw, taking 8d6 radiant damage on a failed save or half as much damage on a successful one.",
    higherLevels:
      "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.",
    school: "evocation",
    radius: {
      count: 40,
      unit: RangeUnit.Feet,
      shape: AreaOfEffectShape.Sphere,
    },
  },
  {
    name: "Wall of Ice Cream",
    level: 4,
    levelString: "4th-level conjuration",
    castTime: {
      count: 1,
      type: CastTimeUnit.Action,
    },
    range: {
      count: 120,
      unit: RangeUnit.Feet,
    },
    components: [
      { short: "V" },
      { short: "S" },
      { short: "M", description: "a spoonful of sugar" },
    ],
    duration: {
      count: 60,
      unit: DurationUnit.Minute,
    },
    description:
      "You conjure a wall of delicious ice cream, 10 feet wide and up to 30 feet long. The wall is 5 feet thick and provides total cover for any creature standing behind it. The wall has hit points equivalent to a wall of stone, and melts away over the course of 1 hour.",
    higherLevels: "",
    school: "conjuration",
  },
  {
    name: "Thunderous Burp",
    level: 0,
    levelString: "cantrip enchantment",
    castTime: {
      count: 1,
      type: CastTimeUnit.Action,
    },
    range: {
      count: 5,
      unit: RangeUnit.Feet,
    },
    components: [{ short: "V" }],
    duration: {
      count: undefined,
      unit: DurationUnit.Instantaneous,
    },
    description:
      "You unleash a deafening burp that echoes throughout the room. Each creature within a 5-foot radius sphere centered on you must make a Constitution saving throw. On a failed save, a creature is stunned until the end of its next turn.",
    higherLevels: "",
    school: "enchantment",
  },
  {
    name: "Bunny Hop",
    level: 2,
    levelString: "2nd-level transmutation",
    castTime: {
      count: 1,
      type: CastTimeUnit.Action,
    },
    range: {
      count: undefined,
      unit: RangeUnit.Touch,
    },
    components: [
      { short: "V" },
      { short: "S" },
      { short: "M", description: "a tuft of white rabbit fur" },
    ],
    duration: {
      count: 10,
      unit: DurationUnit.Minute,
    },
    description:
      "You transform yourself into a fluffy bunny, gaining increased speed and agility. Your movement speed increases by 20 feet, and you can jump three times your normal height.",
    higherLevels: "",
    school: "transmutation",
  },
];

const Spells = RealSpells.concat(FunSpells);
export default Spells;
