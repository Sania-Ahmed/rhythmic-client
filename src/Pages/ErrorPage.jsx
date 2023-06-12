import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-7">
            
            <img className="w-full mt-28" src="https://img.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_114360-1927.jpg?size=626&ext=jpg&ga=GA1.1.632902743.1676570136&semt=sph"  />
            <Link className="text-primary text-xl text-center  my-10 underline" to={'/'}>Go to Home</Link>
        </div>
    );
};

export default ErrorPage;