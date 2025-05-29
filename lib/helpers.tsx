export function proper(str: string) {
  return str.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function pluralize(str: string) {
  var pluralizer = require("pluralize");
  return pluralizer(str);
}
