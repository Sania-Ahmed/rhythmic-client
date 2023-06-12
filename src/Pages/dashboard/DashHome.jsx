import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Title from "../../shared/Title";


const DashHome = () => {
    const {user} = useContext(AuthContext) ;
    return (
        <div className="flex flex-col justify-center items-center gap-3 w-full">
            <Title heading={"Welcome"}></Title>
            <img className="w-44 h-44 avatar rounded-full" src={user?.photoURL} alt="" />
            <h2 className="text-4xl font-semibold text-slate-800" >{user?.displayName}</h2>
        </div>
    );
};

export default DashHome;