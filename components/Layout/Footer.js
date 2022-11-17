import Link from 'next/link'

const Footer = () => {
    return (
        <div className="stack mt-14 text-center">
            <hr className="w-11/12 mx-auto border-dark/10" />
            <small className="text-dark_accent">
                Challenge by <Link href="https://www.frontendmentor.io/" className="text-primary">
                    Frontend Mentor
                </Link>
            </small>
        </div>
    )
}

export default Footer