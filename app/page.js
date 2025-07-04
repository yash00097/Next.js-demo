import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/* <p><a href="/about">About US</a></p> is not a method for single page apps*/}
      <p><Link href="/about">About US</Link></p>
    </main>
  );
}
