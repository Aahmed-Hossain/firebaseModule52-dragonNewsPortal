import { Link } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,photo,email,password)
        // create user
        createUser(email, password)
        .then(response => console.log(response))
        .catch(err => {console.log(err)})
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <h2 className="text-4xl text-center font-semibold my-10">Please Register</h2>
            <form onSubmit={handleRegister} className='mx-auto md:w-3/4 lg:w-1/2'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-neutral">Register</button>
        </div>
        </form>
        <p className='text-center mt-4'>Already have an account?<Link to={'/login'}> <span className='link link-hover text-blue-500'>Login</span> </Link></p>
            </div>
        
  </div>
    );
};

export default Register;