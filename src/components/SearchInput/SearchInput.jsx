import React from 'react';

const SearchInput = () => {
    return (
        <form className='lg:px-5 py-2 font-semibold block'>
            <div className="relative">
                <input type="search" className="block p-1 pl-8 w-full text-sm text-primary rounded-full border-2 border-primary" required />
                <button type="submit" className="text-primary absolute right-2.5 bottom-1.5 text-sm px-4">Search</button>
            </div>
        </form>
    );
};

export default SearchInput;