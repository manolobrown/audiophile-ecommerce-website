import data from "../../assets/data.json";
export default defineEventHandler((event) => {
  //path: "/api/" + event.context.params.categories,

  return data.filter(
    (product) => product.category === event.context.params.categories
  );
});
