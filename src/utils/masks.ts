export const maskCEP = (value: string) => {
  return value.replace(/\D/g, "").replace(/(\d{5})(\d)/, "$1-$2");
};

export const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})$/, "$1-$2");
};
