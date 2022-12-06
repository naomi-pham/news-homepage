import Head from "next/head";
import data from "../data/Data";
import Feature from "../components/Home/Feature";
import Recent from "../components/Home/Recent";
import New from "../components/Home/New";

export default function Home() {
  return (
    <>
      <Head>
        <title>News | Home</title>
        <meta name="description" content="News homepage" />
      </Head>

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
        <article className="col-span-1 lg:col-span-2">
          <Feature data={data.main} />
        </article>
        <aside className="col-span-1">
          <New data={data.sidebar} />
        </aside>
      </div>

      <>
        <Recent data={data.posts} />
      </>
    </>
  );
}
