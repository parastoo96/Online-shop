import React from "react";



const Search=()=> {
    return (  
        <div className="mt-[250px] mb-[400px] flex justify-center">
            <form >
                 <input type="text" placeholder="Search.." name="search" className="w-[300px] h-[30px] rounded-md py-0 px-2.5 border-[1px] border-solid border-silver transition-all" action="/action_page.php"/>
            </form>
        </div>
    );
}

export default Search;