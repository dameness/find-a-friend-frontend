import { PetSize } from "@/types/pets";

export const PetSizeIcons = ({ size }: { size: PetSize }) => (
  <div className="flex items-center gap-1 pt-1">
    {size === "SMALL" && (
      <>
        <img className="w-2.5" src="/circle-on.png" alt="Circle Icon" />
        <img className="w-2.5" src="/circle-off.png" alt="Circle Icon" />
        <img className="w-2.5" src="/circle-off.png" alt="Circle Icon" />
      </>
    )}
    {size === "MEDIUM" && (
      <>
        <img className="w-2.5" src="/circle-on.png" alt="Circle Icon" />
        <img className="w-2.5" src="/circle-on.png" alt="Circle Icon" />
        <img className="w-2.5" src="/circle-off.png" alt="Circle Icon" />
      </>
    )}
    {size === "BIG" && (
      <>
        <img className="w-2.5" src="/circle-on.png" alt="Circle Icon" />{" "}
        <img className="w-2.5" src="/circle-on.png" alt="Circle Icon" />{" "}
        <img className="w-2.5" src="/circle-on.png" alt="Circle Icon" />
      </>
    )}
  </div>
);
