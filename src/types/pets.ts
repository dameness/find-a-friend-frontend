export type Pet = {
  id: string;
  name: string;
  description: string | null;
  requirements: string | null;
  age: PetAge;
  size: PetSize;
  energy: PetLevel;
  independency: PetLevel;
  space_needed: PetLevel;
  image_url: string;
  organization_id: string;
};

export interface PetFilters {
  city: string;
  age?: PetAge;
  size?: PetSize;
  energy?: PetLevel;
  independency?: PetLevel;
  space_needed?: PetLevel;
}

export type PetAge = "PUPPY" | "ADULT" | "SENIOR";
export type PetSize = "SMALL" | "MEDIUM" | "BIG";
export type PetLevel = "LOW" | "MEDIUM" | "HIGH";
