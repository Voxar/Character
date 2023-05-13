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
      unit: RangeUnit.Touch,
    },
    components: [{ short: "V" }, { short: "S" }],
    duration: {
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
  {
    name: "Eldritch Blast",
    level: 0,
    levelString: "Cantrip",
    castTime: { count: 1, type: CastTimeUnit.Action },
    range: { count: 120, unit: RangeUnit.Feet },
    components: [{ short: "V, S" }],
    duration: { unit: DurationUnit.Instantaneous },
    description:
      "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage.",
    higherLevels:
      "The spell creates more than one beam when you reach higher levels: two beams at 5th Level, three beams at 11th level, and four beams at 17th level.",
    school: "evocation",
  },
  {
    name: "Mage Armor",
    level: 1,
    levelString: "1st-level",
    castTime: { count: 1, type: CastTimeUnit.Minute },
    range: { unit: RangeUnit.Touch },
    components: [{ short: "V, S, M", description: "a piece of cured leather" }],
    duration: { count: 8, unit: DurationUnit.Hour },
    description:
      "You touch a willing creature who isn't wearing armor, and a protective magical force surrounds it until the spell ends. The target's base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.",
    higherLevels:
      "When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 8 hours for each slot level above 1st.",
    school: "abjuration",
  },
  {
    name: "Misty Step",
    level: 2,
    levelString: "2nd-level",
    castTime: { count: 1, type: CastTimeUnit.BonusAction },
    range: { count: 0, unit: RangeUnit.Self },
    components: [{ short: "V" }],
    duration: { unit: DurationUnit.Instantaneous },
    description:
      "Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.",
    higherLevels:
      "When you cast this spell using a spell slot of 3rd level or higher, the distance you can teleport increases by 10 feet for each slot level above 2nd.",
    school: "conjuration",
  },
  {
    name: "Darkness",
    level: 2,
    levelString: "2nd-level",
    castTime: { count: 1, type: CastTimeUnit.Action },
    range: { count: 60, unit: RangeUnit.Feet },
    components: [
      {
        short: "V, M",
        description: "bat fur and a drop of pitch or piece of coal",
      },
    ],
    duration: { count: 10, unit: DurationUnit.Minute },
    description:
      "Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.",
    higherLevels: "",
    school: "evocation",
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
