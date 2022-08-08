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
