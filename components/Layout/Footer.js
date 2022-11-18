import Link from "next/link";

const Footer = () => {
  return (
    <footer className="[ stack ] [ ] mt-16 py-8 lg:px-24">
      <hr className="border-dark/10" />
      <small className="text-dark_accent text-center">
        Challenge by{" "}
        <Link href="https://www.frontendmentor.io/" className="text-primary">
          Frontend Mentor.{" "}
        </Link>
        Coded by{" "}
        <Link href="https://www.frontendmentor.io/" className="text-primary">
          Naomi
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
