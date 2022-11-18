import Link from "next/link";

const CardBody = ({ data }) => {
  const { title, body } = data;

  return (
    <div className="stack stack-xs">
      <Link href="/">
        <h5 className="text-base sm:text-xl">{title}</h5>
      </Link>
      <p className="text-sm sm:text-base opacity-70">{body}</p>
    </div>
  );
};

export default CardBody;
