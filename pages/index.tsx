import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Shiva | Building beautiful, functional websites for your business</title>
        <meta name="description" content="I am a full stack web developer experienced in mern stack " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/shivalogo.ico" />
      </Head>
      <Home />
    </>
  );
}
