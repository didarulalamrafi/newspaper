import Categories from "@/app/components/homepage/news/Categories";
import News from "@/app/components/homepage/news/News";
import Social from "@/app/components/homepage/news/Social";
import { getcatagories, getNewsBycatagoriesId } from "@/lib/data";

const CategoryByIdPage = async ({ params }) => {
  const { id } = await params;
  const catagories = await getcatagories();
  const news = await getNewsBycatagoriesId(id);

  console.log(id, "id");
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-10">
      <div className="col-span-3">
        <Categories categories={catagories} activeId={id} />
      </div>
      <div className="col-span-6">
        <h2 className="font-bold text-2xl mb-3">News By Category</h2>
        {news.length > 0 ? (
          news.map((n) => (
            <News key={n._id} news={n}>
              {n.title}
            </News>
          ))
        ) : (
          <h2 className="text-center text-2xl font-bold text-red-600 my-[18%]">
            No News Found
          </h2>
        )}
      </div>
      <div className="col-span-3">
        <Social></Social>
      </div>
    </div>
  );
};

export default CategoryByIdPage;
