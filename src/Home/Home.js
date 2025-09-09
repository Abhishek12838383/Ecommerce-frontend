import banner from '../assets/banner.png'
import axios from 'axios'
import { useEffect, useState ,useContext} from "react";
import { Link } from 'react-router-dom';
import { Selectedproduct,Productdata } from '../ContextAPI';

const Home = () => {

  const {setSelectedData} = useContext(Selectedproduct);
  const {addToCart} = useContext(Productdata);

   const handleSelect = (item) => {
    setSelectedData(item);
    console.log(item)
  };

   const [API,setAPI] = useState([]);

   const addtocart = (item) => {
  addToCart(item);
};


// API
useEffect(()=>{
  try {
    axios.get('https://fakestoreapi.com/products')
.then(result=>
setAPI(result.data)
);
  } catch (error) {
    console.log(error)
  }
},[])



  return (
    <div>
      <img className=' p-2' src={banner} alt='banner'/>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        API.map((item,index)=>{
          return(
          
      <div key={item.id} className="w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <img
        src={item.image}
        alt=''
        className="h-48 w-full object-contain p-4"
      />

      {/* Card Body */}
      <div className="px-5 pb-5">
        {/* Title */}
        <h2 className="text-lg font-semibold truncate">{item.title}</h2>

        {/* Short description */}
        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {item.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-green-600">
            ${item.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
            <Link to='/product'>
          <button
            className="flex-1 border border-gray-300 text-sm text-gray-700 py-1 rounded-xl hover:bg-gray-100 transition"
            onClick={() => handleSelect(item)}
          >
            See More
          </button>
          </Link>
          
          <button
            className="flex-1 bg-blue-600 text-white py-1 rounded-xl hover:bg-blue-700 transition"
            onClick={() => addtocart(item)}
          >
            Add to Cart
          </button>
          
        </div>
      </div>
    </div>
//       <div key={item.id}  className="flex items-center justify-center m-1">
//   <div className="bg-white rounded-xl shadow-lg overflow-hidden w-72 hover:shadow-xl transition-shadow">
//     <img
//       src={item.image}
//       alt="Product"
//       className="w-[14vw] h-32 object-cover ml-[3vw]"
//     />
//     <div className="p-4">
//       <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
//       <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
      
//       <div className="flex items-center justify-between mt-4">
//         <span className="text-lg font-bold text-blue-600">${item.price}</span>
//         <button onClick={() => handleSelect(item)}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
//         >
//           Add to Cart
//         </button>
//        <Link to='/product'>
//          <button onClick={() => handleSelect(item)}
//           className="bg-gray-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg text-sm transition-colors"
//         >
//           See More
//         </button>
//        </Link>
//       </div>
//     </div>
//   </div>
// </div>

          )
        })
      }
</div>
     
     

    </div>
  )
}

export default Home