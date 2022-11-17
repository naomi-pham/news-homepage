import { CardWithImage } from "../Card"

const Recent = ({data}) => {
    return (
        <div className='flex flex-col gap-8 lg:flex-row'>
            {data.map(data => (
                <CardWithImage 
                    key={data.id}
                    data={data}
                />
            ))}
        </div>
    )
}

export default Recent