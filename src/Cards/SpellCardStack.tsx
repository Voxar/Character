import { HTMLAttributes, useState } from "react";
import SpellCard, { SpellCardProps } from "./SpellCard";
import classNames from "classnames";
import { hover } from "@testing-library/user-event/dist/hover";

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
