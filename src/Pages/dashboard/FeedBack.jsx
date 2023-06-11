import { useForm } from "react-hook-form";
import {  useLocation } from "react-router-dom";

const FeedBack = () => {
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const item= location?.state?.item;
    console.log(location)
    
    const onSubmit = (data) => {
        const feedback = data.feedback ;
        console.log(item._id, feedback)
        fetch(`https://rhythmic-server-sania-ahmed.vercel.app/feedback/${item._id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ feedback }) 
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
            alert('updated')
        }
    })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-3">
            <input type="text" name="feedback" placeholder="Your feedback" className="input-primary px-4 py-2 border w-[250px] rounded-md" {...register("feedback", { required: true })} />
            <input type="submit" className="w-[100px] btn btn-primary"/>
            </form>
        </div>
    );
};

export default FeedBack;