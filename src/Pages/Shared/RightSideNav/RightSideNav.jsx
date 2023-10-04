import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4'>
                <h2 className="text-2xl font-bold my-2">Login With</h2>
                <button className='btn btn-outline w-full'>
                    <FaGoogle></FaGoogle> Google
                </button>
                <button className='btn btn-outline w-full my-2'>
                    <FaGithub></FaGithub> Github
                </button>
            </div>
            <div className='p-4'>
                <h2 className="text-2xl font-bold my-2">Find Us On</h2>
                <a className='flex p-4 items-center border rounded-t-lg text-lg' href=''>
                    <FaFacebook></FaFacebook> <span className='ml-4'>Facebook</span>
                </a>
                <a className='flex p-4 items-center border border-y text-lg' href=''>
                    <FaTwitter></FaTwitter> <span className='ml-4'>Twitter</span>
                </a>
                <a className='flex p-4 items-center border text-lg' href=''>
                    <FaInstagram></FaInstagram> <span className='ml-4'>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className='p-4'>
                <h2 className="text-2xl font-bold my-2">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;
