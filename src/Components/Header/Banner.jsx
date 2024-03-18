const Banner = () => {
    return (
        <div className="h-[550px] mt-10">

        <div className="hero h-full" style={{backgroundImage: 'url(src/assets/images/banner_image.jpeg)'}}>
        <div className="hero-overlay bg-opacity-20 "></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="w-[90%] lg:w-[80%] space-y-5">
            <h1 className="text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-5 pb-2">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex justify-center gap-5">
            <button className="btn bg-[#0BE58A] rounded-full border-none text-lg">Explore Now</button>
            <button className="btn rounded-full border-none text-lg">Our Feedback</button>
            </div>
            </div>
        </div>
        </div>

        </div>
    );
};

export default Banner;