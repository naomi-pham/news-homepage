import CardBody from "./CardBody";

const CardWithImage = ({ data }) => {
  const { image, title, id } = data;

  return (
    <div className="center grid grid-cols-3 gap-4">
      <img className="col-span-1" src={image} alt={title} />
      <div className="stack stack-xs col-span-2">
        <p className="font-bold text-accent_light sm:text-5xl lg:text-3xl">
          {id}
        </p>
        <CardBody data={data} />
      </div>
    </div>
  );
};

export default CardWithImage;
