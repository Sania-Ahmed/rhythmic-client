import useClass from "../../hooks/useClass";
import Title from "../../shared/Title";
import Single from "./Single";


const Classes = () => {
    const [Allclasses] = useClass()
    const approvedClasses = Allclasses.filter(c => c?.status === 'approved')
    console.log(approvedClasses) ;
    return (
        <>
        <Title heading= { "Our Classes"}></Title>
        <div className="grid md:grid-cols-3 mt-16 mb-40 p-10">
            {
                approvedClasses.map( single => <Single
                     key={single._id} single={single} ></Single>)
            }
        </div>
        </>
    );
};

export default Classes;