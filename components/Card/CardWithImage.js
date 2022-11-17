import CardBody from './CardBody'

const CardWithImage = ({data}) => {

    const {image, title, id} = data

    return (
        <div className='grid grid-cols-3 gap-4 justify-center items-center'>
            <img className='col-span-1' src={image} alt={title} />
            <div className='col-span-2 stack stack-xs'>
                <p className='sm:text-5xl lg:text-3xl font-bold text-accent_light'>{id}</p>
                <CardBody
                    data={data}
                />
            </div>
        </div>
    )
}

export default CardWithImage