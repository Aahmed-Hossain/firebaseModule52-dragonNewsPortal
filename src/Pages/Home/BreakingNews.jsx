import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex py-2">
            <button className="btn btn-secondary btn-sm">Breaking News
            </button>
            <Marquee  speed={60} pauseOnHover={true}>
                <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12" to={'/'}>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;