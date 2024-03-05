import camelcase from "camelcase";

export const normalizeFormName = (name: string): string | undefined => {
  const camelcaaseName = camelcase(name);

  const regExAlphaNumericOnly = /[^\w\s]/g;
  const normalizedFormName = camelcaaseName?.replace(regExAlphaNumericOnly, "");

  return normalizedFormName;
};
