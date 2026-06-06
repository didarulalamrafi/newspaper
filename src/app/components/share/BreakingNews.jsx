import Marquee from "react-fast-marquee";

const newss = [
  { id: 1, title: "শেষ ওভারে রোমাঞ্চকর জয় বাংলাদেশের" },
  { id: 2, title: "ভারী বৃষ্টিতে নগরজুড়ে যানজট" },
  { id: 3, title: "নতুন ডিজিটাল সেবার ঘোষণা সরকারের" },
  { id: 4, title: "বিনিয়োগকারীদের আগ্রহে ঊর্ধ্বমুখী শেয়ারবাজার" },
  { id: 5, title: "নতুন AI ফিচার উন্মোচন করল প্রযুক্তি প্রতিষ্ঠানগুলো" },
];

const BreakingNews = () => {
  return (
    <div className="flex justify-between items-center p-3 container gap-4 bg-gray-300 mx-auto rounded-md">
      <button className="btn btn-info">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        {newss.map((news) => (
          <span key={news.id}>{news.title} ** </span>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
