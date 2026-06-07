import { redirect } from "next/navigation";
const default_category_id = "01";
const Home = async function () {
  redirect(`/category/${default_category_id}`);
};
export default Home;

// import Image from "next/image";
// import Categories from "../components/homepage/news/Categories";
// import Social from "../components/homepage/news/Social";
// async function getcatagories() {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/news/categories",
//   );
//   const data = await res.json();
//   return data.data;
// }

// async function getNewsByCatagoriesId({ category_id }) {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/categories${category_id}`,
//   );
//   const data = await res.json();
//   return data.data;
// }
// export default async function Home() {
//   const catagories = await getcatagories();
//   // console.log(catagories.news_category, "data");

//   const news = await getNewsByCatagoriesId("03");
//   console.log(news, "news");

//   return (
//     <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
//       <div className="col-span-3">
//         <Categories categories={catagories} activeId={"02"} />
//       </div>
//       <div className="col-span-6 bg-gray-400">
//         News
//         {}
//       </div>
//       <div className="col-span-3">
//         <Social></Social>
//       </div>
//     </div>
//   );
// }
