import { Link } from "react-router-dom";
import home from '../../assets/wave.svg'


const Home = () => {
    return (

            <div className="hero relative min-h-[calc(100vh-120px)] bg-base-200">
  <div className="hero-content text-center mb-16">
    <div className="max-w-lg">
      <h1 className="text-4xl font-bold">Welcome to <span   class="bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">ByteBlaze</span></h1>
      <p className="py-6">ByteBlaze is the bridge between the complex world of technology and the curious minds eager to understand it</p>
      <div className="flex gap-4 items-center justify-center">
        <Link to="/blogs" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-pink-500 group-hover:bg-blue-700"></span>
<span class="relative text-black font-bold group-hover:text-white">Read Blogs</span>
</Link>

        <Link to="/bookmarks" class="relative inline-block px-4 py-2 font-medium group">
<span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-blue-700 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span class="absolute inset-0 w-full h-full bg-white border-2 border-pink-500 group-hover:bg-blue-700"></span>
<span class="relative text-black font-bold group-hover:text-white">Bookmarks</span>
</Link>
      </div>
    </div>
  </div>
  <img className="absolute bottom-0 w-full" src={home} alt="" />
</div>

    );
};

export default Home;