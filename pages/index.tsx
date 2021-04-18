import Head from "next/head";
import Index from "../src/components/Index";

export default function Component() {
  return (
    <main>
      <Head>
        <title>Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Index />
    </main>
  );
}
