import Card from './Card';

const Available = ({availables,handleSelectPlayer,handleRemoveAmount}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                availables.map((avail,idx)=>
                <Card 
                handleSelectPlayer={handleSelectPlayer}
                handleRemoveAmount={handleRemoveAmount}
                key={idx}
                avail={avail}/>)
            }
        </div>
    );
};

export default Available;