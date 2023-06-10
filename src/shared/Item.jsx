/* eslint-disable react/prop-types */

const Item = ({ item }) => {
    return (
        <div className="card w-80 h-96 bg-base-100 shadow-xl">
            <figure><img src={item.image} className="w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                {item.instructor && <p className="text-purple-400 font-semibold">{item.instructor}</p>}
            </div>
        </div>
    );
};

export default Item;