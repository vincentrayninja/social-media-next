import FeedLeft from "../components/Feed/FeedLeft";
import FeedPosts from "../components/Feed/FeedPosts";
import FeedRight from "../components/Feed/FeedRight";
import Navbar from "../components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="grid grid-cols-7 grid-flow-col gap-4" >
      {/* left section */}
      <FeedLeft />
      {/* center section */}
      <FeedPosts />
      {/* right section */}
      <FeedRight />
    </div>
    </>
  )
}
