import { CardBody } from "../Card";

const New = ({ data }) => {
  return (
    <div className="stack bg-dark p-6 text-light">
      <h2 className="text-primary">New</h2>
      <div className="stack">
        {data.map((data) => (
          <div
            className="border-b border-b-light/40 pb-8 last:border-0"
            key={data.id}
          >
            <CardBody data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
