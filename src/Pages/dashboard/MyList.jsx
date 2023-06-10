import { list } from "postcss";
import useList from "../../hooks/useList";
import MyListItem from "./MyListItem";

const MyList = () => {
    const [lists] = useList() ;
    console.log(list)
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Name</th>
        <th>Instructor</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     {
        lists.map( item => <MyListItem key={item._id} item={item}></MyListItem>)
     }
    </tbody>
  </table>
</div>
    );
};

export default MyList;