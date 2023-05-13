export enum CastTimeUnit {
  Action = "action",
  BonusAction = "bonus_action",
  Reaction = "reaction",
  Minute = "minute",
  Hour = "hour",
}

export interface ICastTime {
  count: number;
  type: CastTimeUnit;
}

export enum RangeUnit {
  Self = "Self",
  Touch = "Touch",
  Feet = "feet",
}

export interface IRange {
  count?: number;
  unit: RangeUnit;
}

export interface IComponent {
  short: string;
  description?: string;
}

export enum DurationUnit {
  Instantaneous = "instantaneous",
  Round = "round",
  Minute = "minute",
  Hour = "hour",
  UntilDispelled = "until dispelled",
  Concentration = "concentration",
}

export interface IDuration {
  count?: number;
  unit: DurationUnit;
}

export enum AreaOfEffectShape {
  Radius = "radius",
  Cone = "cone",
  Line = "line",
  Sphere = "sphere",
}

export interface IAreaOfEffect {
  count: number;
  unit: RangeUnit;
  shape: AreaOfEffectShape;
}

export interface ISpell {
  name: string;
  level: number;
  levelString: string;
  castTime: ICastTime;
  range: IRange;
  components: IComponent[];
  duration: IDuration;
  description: string;
  higherLevels: string;
  school: string;
  radius?: IAreaOfEffect;
}
