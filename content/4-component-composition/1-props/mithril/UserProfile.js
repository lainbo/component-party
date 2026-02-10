import m from "mithril";

export const UserProfile = () => ({
  view: ({ attrs: { name, age, favouriteColors, isAvailable } }) =>
    m(
      "div",
      m("p", `我的名字是 ${name}!`),
      m("p", `My age is ${age}!`),
      m("p", `My favourite colors are ${favouriteColors.join(", ")}!`),
      m("p", `I am ${isAvailable ? "available" : "not available"}`),
    ),
});
