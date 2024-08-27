export type Organization = {
  id: string;
  name: string;
  email: string;
  phone: string;
  zip_code: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  latitude: number;
  longitude: number;
};

export type State = {
  state: string;
  cities: string[];
};
