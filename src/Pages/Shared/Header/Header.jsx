import moment from 'moment/moment';
import logoImg from '../../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto my-2' src={logoImg} alt="" />
            <p className="divider">Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;