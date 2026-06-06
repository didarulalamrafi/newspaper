import Link from "next/link";

const Categories = ({ categories, activeId }) => {
  return (
    <div>
      <h3 className="font-bold text-xl mb-3">All Catagories</h3>
      {
        <ul className="flex flex-col gap-2">
          {categories.news_category.map((category) => {
            return (
              <li
                className={`${activeId === category.category_id && "bg-slate-100"}`}
                key={category.category_id}
              >
                <Link
                  href={`/category/${category.category_id}`}
                  className="block"
                >
                  {category.category_name}
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
