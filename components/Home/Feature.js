import { Button } from "../Button";

const Feature = ({ data }) => {
  const { image, imageAlt, title, body } = data;

  return (
    <div className="stack">
      <img src={image} alt={imageAlt} />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-12">
        <h1 className="col-span-2">{title}</h1>
        <div className="stack stack-sm col-span-2 items-start">
          <p className="text-lg text-dark/60">{body}</p>
          <Button>Read more</Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
