const Navbar = () => {
    return (
    <div className="flex justify-between w-[90%] mx-auto items-center mt-5">
        <div>
            <h3 className="text-4xl font-bold">Recipe Calories</h3>
        </div> 
    <div>
    <ul className="flex gap-10 ">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Search</li>
    </ul>
    </div>

    <div className="flex justify-end gap-5 items-center">

    <div>
    <input type="text"  placeholder="Search" className="p-2 w-20 md:w-auto rounded-full" />
    </div>
    
    <div className="bg-[#0BE58A] rounded-full p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    </div>

    </div>

    </div>

    );
};

export default Navbar;