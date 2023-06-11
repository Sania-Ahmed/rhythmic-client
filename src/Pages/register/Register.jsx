import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const {createUser, setReload, updateUserProfile,signWithGoogle } = useContext(AuthContext) ;
    const [error, setError] = useState('')
    const navigate = useNavigate() ;
    const onSubmit = data => {
        if( data.password !== data.confirm){
            return setError('password does not match')
        }
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user ;
            console.log(loggedUser) ;
            updateUserProfile(data.name, data.photoUrl)
            .then(() => {
                setReload(true)
                const saveUser = {name:data.name, email: data.email, image: data.photoUrl}
                fetch('https://rhythmic-server-sania-ahmed.vercel.app/users', {
                  method:'POST',
                  headers: {
                    'content-type':'application/json'
                  },
                  body: JSON.stringify(saveUser) 
                })
                .then(res => res.json())
                .then(data => {
                  if(data.insertedId) {
                    alert('registered successfully')
                    navigate('/') ;
                  }
                })
            })
           

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
            setError(errorMessage) ;
        });
    };
    const handleGoogleLogin = () => {
      signWithGoogle() 
      .then ( result => {
        const loggedUser = result.user ;
        const saveUser = {name:loggedUser.displayName, email: loggedUser.email, image: loggedUser?.photoURL}
        fetch ('https://rhythmic-server-sania-ahmed.vercel.app/users', {
          method:'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(saveUser) 
        })
        .then(res => res.json())
        .then(() => {
            navigate('/') ;
        })
             
       }
      )
    }
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col">
       <h2 className="text-center font-semibold text-2xl uppercase">Register</h2>
       <p className='text-2xl text-center text-warning font-semibold my-7'>{error}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered"  {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" {...register("password", 
                { required: true,
                 minLength: 6, 
                 pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*_=+-])/})} />
                {errors.password && <span>This field is required</span>}
                {errors.password?.type === 'minLength' && <p role="alert">password is less then 6 digit</p>}
                {errors.password?.type === 'pattern' && <p role="alert">please include a Capital letter and a special character</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name="confirm" placeholder="confirm password" className="input input-bordered" {...register("confirm", { required: true })} />
                {errors.confirm && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo URl</span>
                </label>
                <input type="text" name="photoURL" placeholder="image url" className="input input-bordered" {...register("photoUrl", { required: true })}  />
                {errors.photoUrl && <span>This field is required</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </form>
          <Link to={"/login"} className="text-primary">have an account? register</Link>
          <button onClick={handleGoogleLogin} className="btn btn-outline btn-primary">Google Login</button>
        </div>
      </div>
    );
};

export default Register;