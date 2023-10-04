import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=> {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl font-semibold text-center my-4">All Categories</h2>
            {
                categories.map(category => <Link 
                    className="block m-4 text-xl font-medium text-zinc-600"
                    key={category.id}  
                    to={`/category/${category.id}`
                    }>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;