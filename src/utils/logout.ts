const deleteCookie = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const logout = () => {
  deleteCookie("refreshToken");
  localStorage.removeItem("accessToken");
  window.location.href = "/";
};
