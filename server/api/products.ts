import data from "../../assets/data.json";
import { IncomingMessage, ServerResponse } from "http";

//export default (req: IncomingMessage, res: ServerResponse) => {
//const { pathname } = new URL(req.url!, `http://${req.headers.host}`);
//const slug = pathname.split("/")[0];
//const category = pathname.split("/")[0];

//return data.filter((product) => product.category === "headphones");
//return data.filter((product) => product.category === category);
//return data.find((product) => product.slug === "xx99-mark-one-headphones");
//return data.find((product) => product.slug === slug);

// if (!slug) {
//   return {
//     products: data.filter((product) => product.category === category),
//   };
// } else {
//   return data.find((product) => product.slug === slug);
// }
//};

// export default defineEventHandler((event) => {
//   return {
//     products: data,
//   };
// });

export default defineEventHandler((e) => {
  return data;
});
