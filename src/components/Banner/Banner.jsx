import './Banner.css'

const Banner = ({handleAmount}) => {
    return (
        <div className="banner flex flex-col justify-center items-center space-y-6 py-32 text-white">
            <div className='py-3'>
                <img src="/src/assets/images/banner-main.png" alt="no_image" />
            </div>
            <h1 className='text-3xl lg:text-6xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-xl'>Beyond Boundaries Beyond Limits</p>
                            <button onClick={()=>{
                    handleAmount(660000)
                }} className='bg-[#E7FE29] text-black px-4 py-4 rounded-2xl font-bold btn-claim'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;