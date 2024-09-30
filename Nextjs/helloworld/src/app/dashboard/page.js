import Image from "next/image";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 ">
      <h1 className="font-bold text-4xl">Dashboard</h1>

      <Link href={'/dashboard/profile'}>Go to Profile</Link>
      <Link href={'/dashboard/settings'}>Go to Settings</Link>
      <Link href={'/dashboard/myblogs'}>Go to My Blogs</Link>
    </div>
  );
}
