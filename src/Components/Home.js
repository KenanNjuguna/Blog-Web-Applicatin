import Bloglist from "./Bloglist";
import UseFetch from "./UseFetch";

const Home = ()=>{
    const {data:blogs}=UseFetch('http://localhost:4000/blogs')

    return(
        <div className="Home">
            {blogs && <Bloglist blogs={blogs}title="All blogs"/>}

        </div>
    );
}

export default Home;