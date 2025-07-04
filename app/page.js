import Link from "next/link";
import Header from "@/components/header";


export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/* <p><a href="/about">About US</a></p> is not a method for single page apps*/}
      <p><Link href="/about">About US</Link></p>
    </main>
  );
}
