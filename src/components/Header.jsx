import { BsCoin } from "react-icons/bs";

const Header = ({amount}) => {
    return (
        <div className="scroll-auto flex justify-between text-2xl mt-8 mb-8">
           <div>
            <img src="/src/assets/images/logo.png" alt="" />
            </div>
            <div className="flex items-center gap-6">
                <ul className="flex items-center gap-6">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a> </li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                </ul>
                    <button className="flex items-center gap-4 border border-gray-300 px-6 py-4 rounded-2xl">{amount} Coins <span className="text-[#F39E09] text-2xl"><BsCoin /></span></button>         
            </div>
           </div>
    );
};

export default Header;