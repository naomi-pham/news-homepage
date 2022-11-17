import Link from "next/link"
import { useState } from "react"
import data from "../../data/Data"

const Nav = () => {

    const {site, nav} = data

    const style = {
        wrapper: `flex justify-between items-center p-8`,
        navList: `sm:flex gap-8 hidden`,
        navListMobile: `stack text-2xl mt-24 pl-8`,
        navMobileContainer: `sm:hidden fixed top-0 bottom-0 right-0 h-full w-8/12 bg-light z-10`,
    }

    const [isExpanded, setIsExpanded] = useState(false)

    function toggleExpanded() {
        setIsExpanded(prevIsExpanded => !prevIsExpanded)
    }

    return (
        <nav className={style.wrapper}>
            {/* Nav Desktop */}
            <img src={site.logo} />
            <ul className={style.navList}>
                {nav.map(data => (
                    <li key={data.id}>
                        <Link href={data.link}>{data.name}</Link>
                    </li>
                ))}
            </ul>
            {/* Nav Mobile */}
            <img onClick={toggleExpanded} src={isExpanded ? "../images/icon-menu-close.svg" : "../images/icon-menu.svg"} className="z-20 sm:hidden" />
            {isExpanded && 
                <div className={style.navMobileContainer}>
                    <ul className={style.navListMobile}>
                        {nav.map(data => (
                            <li onClick={toggleExpanded} key={data.id}>
                                <Link href={data.link}>{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </nav>
    )
}

export default Nav