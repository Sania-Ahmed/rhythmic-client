import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
  const [show, setShow] = useState(false)
  const location = useLocation();
  const from = location.state?.from?.pathname || "/" ;
  console.log(location.state?.from?.pathname)
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const{signIn, signWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate() ;
  const handleShow = () => {
    setShow(!show) ;
  }
  const onSubmit = data => {
     signIn(data.email, data.password)
     .then(result => {
      const loggedUser = result.user ;
            console.log(loggedUser) ;
            navigate(from)
     }
      
      )
  }
  const handleGoogleLogin = () => {
    signWithGoogle() 
    .then ( result => {
      const loggedUser = result.user ;
            console.log(loggedUser) ;
            navigate(from)
     }
    )
  }

    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col">
     
          <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })}/>
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center justify-center gap-2">
                <input type={show ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })} /> 
                <p onClick={handleShow} className=" text-primary cursor-pointer">{show ? 'hide' : 'show'}</p>
                </div>
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </form>
          <Link to={"/register"} className="text-primary">Do not have an account? register</Link>
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary">Google Login</button>
        </div>
      </div>
    );
};

export default Login;