import { getNewsByDetailsId } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';

const NewsDetailsPage = async ({params}) => {
    const {id} = await params
    const news = await getNewsByDetailsId(id)
    console.log(news, "news")
    return (
        <div className='container mx-auto my-10'>
            <div className="card w-4xl mx-auto bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image className="rounded-full" src={news.author?.img} width={50} height={50} alt="Author img"/>
            <div className="flex">
              <h3>{news.author?.name}</h3>
              <p>{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex items-center text-2xl">
            <CiShare2 />
            <CiBookmark />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
        
      </div>
      <figure>
        <Image className="w-full" src={news?.image_url} width={300} height={300} alt="Author img"/>
      </figure>
      <p>
          {news.details}
        </p>
        <div>
          <p>{news.rating.number}</p>
          <Link href={`/category/${news.category_id}`}>
            <button className="btn btn-secondary">All news this category</button>
          </Link>
        </div>
    </div>
        </div>
    );
};

export default NewsDetailsPage;