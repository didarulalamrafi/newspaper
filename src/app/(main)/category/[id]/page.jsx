// import React from 'react';

// const NewCatagoryPage = () => {
//     return (
//         <div>
//             New Catagory
//         </div>
//     );
// };

// export default NewCatagoryPage;

export default async function CategoryPage({ params }) {
  const { id } = await params;

  return <h1>Category ID: {id}</h1>;
}