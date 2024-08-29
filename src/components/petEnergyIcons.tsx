import { PetLevel } from "@/types/pets";

export const PetEnergyIcons = ({ energy }: { energy: PetLevel }) => (
  <div className="flex items-center gap-1">
    {energy === "LOW" && (
      <>
        <img className="w-3.5" src="/lightning-on.png" alt="Lightning Icon" />
        <img className="w-3.5" src="/lightning-off.png" alt="Lightning Icon" />
        <img className="w-3.5" src="/lightning-off.png" alt="Lightning Icon" />
      </>
    )}
    {energy === "MEDIUM" && (
      <>
        <img className="w-3.5" src="/lightning-on.png" alt="Lightning Icon" />
        <img className="w-3.5" src="/lightning-on.png" alt="Lightning Icon" />
        <img className="w-3.5" src="/lightning-off.png" alt="Lightning Icon" />
      </>
    )}
    {energy === "HIGH" && (
      <>
        <img className="w-3.5" src="/lightning-on.png" alt="Lightning Icon" />{" "}
        <img className="w-3.5" src="/lightning-on.png" alt="Lightning Icon" />{" "}
        <img className="w-3.5" src="/lightning-on.png" alt="Lightning Icon" />
      </>
    )}
  </div>
);
