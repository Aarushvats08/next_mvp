import React from 'react';
import "./comp.css"
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

const PostComponent: React.FC<Props> = ({ postData }) => {
  return (
    postData?.results?.map((post: any) => 
        <div key={post.id} className="small-post">
            <div className={`post-cover`} style={{ position: 'relative' }}>
              <img
                className={`p-cover`}
                style={{ objectFit: 'cover' }}
                src={`https://img-cdn.thepublive.com/${post.banner_url}`}
                loading="lazy"
                alt={post.title}
              />
            </div>
          <a href={post.legacy_url} aria-label={post.title}>
            <div className="post-title title_link primary_font">{post.title}</div>
          </a>
          <div className="post-author secondary_font my-1">
            <span>{'by'}</span>
            {post.contributors[0] && (
              <a href={`/author/${post.contributors[0].slug}`} aria-label={post.contributors[0].name}>
                <span className="author-name">{post.contributors[0].name}</span>
              </a>
            )}
            {post.contributors[1] && (
              <>
                <span>{'and'}</span>
                <a href={`/author/${post.contributors[1].slug}`} aria-label={post.contributors[1].name}>
                  <span className="author-name">{post.contributors[1].name}</span>
                </a>
              </>
            )}
            {!post.contributors[0] && (
              <a href={`/author/${post.member.slug}`} aria-label={post.member.name}>
                <span className="author-name">{post.member.name}</span>
              </a>
            )}
          </div>
          <div className="post-date secondary_font">
            <span className="publish-date mx-1">{post.formatted_last_published_at_datetime}</span>
            {post.read_time && (
              <span className="publish-date mx-1">
                {post.read_time} {'minutes_read'}
              </span>
            )}
          </div>
        </div>
      )
  );
};

export default PostComponent;
