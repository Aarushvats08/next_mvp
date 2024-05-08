import React from "react"
import "./carousel.css"

interface Post {  
  legacy_url: string;
  title: string;
  type: string;
  banner_url: string;
  primary_category: {
    slug: string;
    name: string;
  };
  contributors: {
    slug: string;
    name: string;
  }[];
  member: {
    slug: string;
    name: string;
  };
  formatted_last_published_at_datetime: string;
  read_time: number;
}
interface postDict {
  next:string;
  previous:string;
  count:number;
  results: Post[];
}

interface Props {
  postData:postDict
}


const CarouselPosts: React.FC<Props> = ({postData}) => {
  
  return (
    <>
      <div className="scroll-base">
        {postData?.results?.map((post: any) =>  (
          <div  className="sass-post" key={post.id}>
            <img src={`https://img-cdn.thepublive.com/${post?.banner_url}`} alt="" />
            <h3 >{post?.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default CarouselPosts;