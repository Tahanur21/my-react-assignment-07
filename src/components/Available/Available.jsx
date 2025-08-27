import Card from './Card';

const Available = ({availables}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
            {
                availables.map((avail,idx)=>
                <Card 
                key={idx}
                avail={avail}/>)
            }
        </div>
    );
};

export default Available;