import data from "../../assets/data.json";
export default defineEventHandler((event) => {
  return data.find((product) => product.slug === event.context.params.slug);
});
