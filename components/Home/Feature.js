import { Button } from '../Button'

const Feature = ({data}) => {

    const {image, imageAlt, title, body} = data

    return (
        <div className="stack">
            <img src={image} alt={imageAlt} />
            <div className="stack lg:flex-row lg:gap-12">
                <h1>{title}</h1>
                <div className="stack stack-sm items-start">
                    <p>{body}</p>
                    <Button>Read more</Button>
                </div>
            </div>
        </div>
    )
}

export default Feature