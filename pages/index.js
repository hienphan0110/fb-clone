import Head from "next/head";
import { getSession } from "next-auth/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home({ session }) {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico"
        />
        <title>Facebook</title>
      </Head>
      <Header />
      <main className="flex justify-between">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
