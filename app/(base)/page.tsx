import { formatDate } from "@/lib/helper";
import { sanityFetch } from "@/sanity/lib/client";
import { Link } from "@nextui-org/react";
import React from "react";

const HomePage = async () => {
  const posts: any[] = await sanityFetch({ query: "*[_type == 'post']" });
  return (
    <>
      <div className="flex flex-col gap-4">
        {posts.length > 0 &&
          posts.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <div className="text-second">{formatDate(item.publishedAt)}</div>
              <Link href={"/" + item?.slug?.current}>{item.title}</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
