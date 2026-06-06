import React from "react";

const NewsPage = async ({ params }) => {
  const id = await params.id;
  console.log(id);
  return <div>News Page</div>;
};

export default NewsPage;
