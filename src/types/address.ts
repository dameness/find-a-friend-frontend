export type Address = {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  service: string;
  location: {
    type: string;
    coordinates?: {
      longitude: string;
      latitude: string;
    };
  };
};
