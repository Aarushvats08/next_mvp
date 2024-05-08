// import CarouselPosts from "./components/carousel_comp/carousel_comp_post"
import CarouselPosts from "./components/carousel_comp/carousel_comp_post"
import NavbarComp from "./components/navbar_comp/navbar"
import PostComponent from "./components/post_list_comp/post_list"
import "./page.css"
// import PostComponent from "./components/post_list_comp/post_list"

async function getData() {
  const res = await fetch('https://betaapi.thepublive.com/api/posts/web_v2?status=Published&curr_post_id=None&publisher=stp-english-beta.publive.io&type=Article%2CVideo&tile=Big+Tile&sorting=published_at-desc&categories=health&valid_images=True&limit=10&offset=0')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Page() {
  const data = await getData()
  const compType:number = 1
  return <> 
  <NavbarComp/> 
  <main className="main-container container">
    {compType === 1 ? <div className="carousel-box">
    <CarouselPosts  postData={data}/>
    </div> : <div className="post-container">
      <PostComponent postData={data}/>
    </div> }
    

  </main>
  </>

}