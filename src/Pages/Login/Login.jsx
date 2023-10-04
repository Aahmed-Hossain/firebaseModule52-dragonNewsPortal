import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './../Shared/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        logIn(email, password)
        .then(res =>console.log(res))
        // navigate after login
        navigate(location?.state ? location.state : '/')
        .then(err => console.log(err))
        console.log(email,password)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-4xl text-center font-semibold my-10">Please Login</h2>
            <form onSubmit={handleLogin} className='mx-auto md:w-3/4 lg:w-1/2'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name='password' />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Login</button>
        </div>
        </form>
        <p className='text-center mt-4'>Don't have an account?<Link to={'/register'}> <span className='link link-hover text-blue-500'>Register</span> </Link></p>
            </div>
        
  </div>
    );
};

export default Login;