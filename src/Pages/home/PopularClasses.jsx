
import Item from "../../shared/Item";
import Title from "../../shared/Title";
import useClass from "../../hooks/useClass";

const PopularClasses = () => {
    const [Allclasses] = useClass()
    
    const popular = Allclasses.filter(item => item?.category=== 'popular')
    return (
        <div className="my-10">
            <Title heading={'Popular Classes'}></Title>
            <div className="grid md:grid-cols-2 gap-3">

                {
                    popular.map(
                        classItem =>
                            <Item key={classItem._id} item={classItem}></Item>
                    )
                }

            </div>
        </div>
    );
};

export default PopularClasses;