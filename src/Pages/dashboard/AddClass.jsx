import { useContext } from "react";
import Title from "../../shared/Title";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProviders";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext) ;
    const { register, handleSubmit} = useForm();

    const onSubmit = data => {

      
       const {name, image , price , available_seats, } = data ;
       const newClass = {
        name,
        image,
        price : parseFloat(price) ,
        available_seats,
        status : 'pending',
        feedback: 0,
        students: 0,
        email : user?.email ,
        instructor: user?.displayName
       }
       console.log(newClass) ;
       axiosSecure.post('/class', newClass) 
       .then( data => {
           if(data.data.insertedId){
            alert('class added') 
           }
       })

     }

    return (
        <div className="w-full">
            <Title heading={"Add a Class"}></Title>
            <form onSubmit={handleSubmit(onSubmit)}  className="w-3/4 mx-auto flex flex-col justify-center items-center border p-4">
                <div className="form-control my-4">
                    <label className="label">
                        <span className="label-text">Enter class name</span>
                    </label>
                    <label className="input-group">
                        <span>Class Name</span>
                        <input {...register("name", { required: true })} type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-4">    
                    <label className="input-group">
                        <span>Image Url</span>
                        <input {...register("image", { required: true })} type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group">
                        <span>Class Price</span>
                        <input {...register("price", { required: true })} type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-4">
            
                    <label className="input-group">
                        <span>Available seats</span>
                        <input {...register("available_seats", { required: true })} type="text" className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-4">
                    <label className="input-group">
                        <span>Instructor</span>
                        <input type="text" defaultValue={user?.displayName} className="input input-bordered" />
                    </label>
                </div>
                <div className="form-control my-4">
                    
                    <label className="input-group">
                        <span>email</span>
                        <input type="text" defaultValue={user?.email} className="input input-bordered" />
                    </label>
                </div>
                <input type="submit" value="Add Class" className="btn btn-primary " />
            </form>
        </div>
    );
};

export default AddClass;