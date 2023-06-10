import useInstructors from "../../hooks/useInstructors";
import Item from "../../shared/Item";
import Title from "../../shared/Title";


const Instructors = () => {
     const [Allinstructors] = useInstructors()
    console.log(Allinstructors);
    return (
        <div className="my-10">
            <Title heading={'Expert Instructors'}></Title>
            <div className="grid md:grid-cols-2 gap-3">

                {
                    Allinstructors.map(
                        classItem =>
                            <Item key={classItem._id} item={classItem}></Item>
                    )
                }

            </div>
        </div>
    );
};

export default Instructors;