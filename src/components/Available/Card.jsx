import { ImUser } from "react-icons/im";
import { FaFlag } from "react-icons/fa";
const Card = ({ avail,handleSelectPlayer,handleRemoveAmount }) => {
const {name,country,image,role,batting,bidding_price} = avail
    return (
        <div>
            {/* card from daisyUi */}
            <div className="card bg-base-100 border border-gray-200">
                <figure className="p-5 pt-6 w-md h-80 mx-auto">
                    <img className=" rounded-2xl w-full h-full object-cover"
                        src={image}
                        alt="image_of_player" />
                </figure>
                <div className="card-body">
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl"><ImUser /></h2>
                        <h2 className="card-title text-2xl mt-2 text-[#635e5e]"> {name}</h2>
                    </div>
                    <div className="flex items-center gap-4 my-3 ml-1 text-[#635e5e] text-lg border-b border-gray-200 pb-4">
                        <FaFlag />
                        <p>{country}</p>
                        <div>
                            <h2 className="text-lg font-semibold border border-gray-300 p-4 rounded-2xl">{role}</h2>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold my-3">Rating</h2>
                        <div className="flex justify-between text-xl mb-6">
                            <h2 className="font-semibold">Play Style</h2>
                            <h2 className="text-[#635e5e]">{batting}</h2>
                        </div>
                    </div>
                    <div className="card-actions items-center justify-between ">
                        <h2 className="text-xl font-semibold">Price : ${bidding_price}</h2>
                        <button
                        onClick={()=>{
                            handleSelectPlayer(avail);
                            handleRemoveAmount(bidding_price)
                        }}
                        className="btn bg-[#E7FE29] rounded-xl px-7 py-6 text-lg text-[#635e5e] font-bold">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;