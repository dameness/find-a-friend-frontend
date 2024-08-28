export type Pet = {
  id: string;
  name: string;
  description: string | null;
  requirements: string | null;
  age: "PUPPY" | "ADULT" | "SENIOR";
  size: "SMALL" | "MEDIUM" | "BIG";
  energy: "LOW" | "MEDIUM" | "HIGH";
  independency: "LOW" | "MEDIUM" | "HIGH";
  space_needed: "LOW" | "MEDIUM" | "HIGH";
  image_url: string;
  organization_id: string;
};

export interface PetFilters {
  city: string;
  age?: "PUPPY" | "ADULT" | "SENIOR";
  size?: "SMALL" | "MEDIUM" | "BIG";
  energy?: "LOW" | "MEDIUM" | "HIGH";
  independency?: "LOW" | "MEDIUM" | "HIGH";
  space_needed?: "LOW" | "MEDIUM" | "HIGH";
}
