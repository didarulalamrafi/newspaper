import Image from "next/image";
import Categories from "../components/homepage/news/Categories";
import Social from "../components/homepage/news/Social";
async function getcatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

async function getNewsBycatagoriesId(id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`,
  );
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const catagories = await getcatagories();
  // console.log(catagories.news_category, "data");

  const news = await getNewsBycatagoriesId("04");
  console.log(news, "news")

  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
      <div className="col-span-3">
        <Categories categories={catagories} activeId={"02"} />
      </div>
      <div className="col-span-6 bg-gray-400">News
        {
          news.map(n=> <div key={n._id} className="border-2 border-amber-200 p-3 m-4 rounded-md" >{n.title}</div> )
        }
      </div>
      <div className="col-span-3">
        <Social></Social>
      </div>
    </div>
  );
}
