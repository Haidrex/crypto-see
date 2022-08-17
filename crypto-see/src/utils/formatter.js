import moment from "moment";

export const dateFormatter = (time) => {
  return moment(time).format("MMM Do");
};

export const priceFormatter = (price) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(price);
};

export const formatDescription = (text) => {
  var find = "</a>";
  var find2 = "<a";
  var re2 = new RegExp(find2, "g");
  var re = new RegExp(find, "g");
  let result = text.replace(re2, "<Link");
  result = text.replace(re, "</Link>");
  return result;
};

export const roundTo2Decimal = (number) => {
  const result = Math.round((number + Number.EPSILON) * 100) / 100;
  return result;
};
