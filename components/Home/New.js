import { CardBody } from "../Card"

const New = ({data}) => {

    return (
        <div className="stack bg-dark text-light p-8">
            <h2 className="text-primary">New</h2>
            <div className="stack">
                {data.map(data => (
                    <div className="stack stack-sm border-b border-b-light/40 last:border-0 pb-8" 
                         key={data.id}
                    >
                        <CardBody 
                            data={data}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default New

