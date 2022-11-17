import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data from '../data/Data'
import Feature from "../components/Home/Feature"
import Recent from '../components/Home/Recent'
import New from '../components/Home/New'

export default function Home() {

  const style = {
    wrapper: `flex flex-col gap-24`,
    container: `grid grid-cols-1 lg:grid-cols-3 gap-14`,
    colLarge: `col-span-1 lg:col-span-2`,
    colSmall: `col-span-1`
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{data.site.title}</title>
        <meta name={data.site.title} content={data.site.description} />
      </Head>

      <main className={style.wrapper}>
        <section className={style.container}>
          <div className={style.colLarge}>
            <Feature
              data={data.main}
            />
          </div>
          <div className={style.colSmall}>
            <New
              data={data.sidebar}
            />
          </div>
        </section>

        <section>
          <Recent
            data={data.posts}
          />
        </section>
      </main>

    </div>
  )
}
