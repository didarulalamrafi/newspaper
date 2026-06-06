import Image from "next/image";

async function catagories  () {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json()
  return data;
}
export default async function Home() {
  const catagories = await catagories();
  console.log(catagories, "data")
  return (
  <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
    <div className="col-span-3 bg-amber-400 ">Catagori</div>
    <div className="col-span-6 bg-gray-400">News</div>
    <div className="col-span-3 bg-green-300">Social</div>
  </div>
  )
}
