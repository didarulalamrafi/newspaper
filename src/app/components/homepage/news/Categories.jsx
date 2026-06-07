import Link from "next/link";

const Categories = ({ categories, activeId }) => {
  return (
    <div>
      <h3 className="font-bold text-2xl mb-3">All Catagories</h3>
      {
        <ul className="flex flex-col gap-2">
          {categories.news_category.map((catagory) => {
            return (
              <li
                className={` text-center ${activeId === catagory.category_id && "bg-green-700 p-2 rounded-md text-center"}`}
                key={catagory.category_id}
              >
                <Link
                  href={`/category/${catagory.category_id}`}
                  className="block"
                >
                  {catagory.category_name}
                </Link>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Categories;
