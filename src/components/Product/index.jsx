import { useContext } from 'react';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { ImPriceTags } from 'react-icons/im';
import { AuthProvider } from '../../context/AuthContext';

function Product({ data }) {

    const { user } = useContext(AuthProvider)
    console.log(user, 'user');


    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={data.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <p><ImPriceTags className=' inline text-3xl' /> <span className='font-bold'>price:{data.price} $</span></p>

                    {/* modal button  */}
                    {user ? <label className="btn btn-primary"><BsFillCartCheckFill className=' inline text-3xl ' /><span className=' font-bold text-white' >addToCart</span></label> : <label htmlFor="login_modal" className="btn btn-primary"><BsFillCartCheckFill className=' inline text-3xl ' /><span className=' font-bold text-white' >addToCart</span></label>}
                </div>
            </div>
        </div>
    )
}

export default Product;