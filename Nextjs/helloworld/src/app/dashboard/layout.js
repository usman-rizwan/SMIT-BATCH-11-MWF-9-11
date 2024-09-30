import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col w-1/4  border-r-2">
        <Link
          href={"/dashboard/profile"}
          className="block w-full text-center
      p-3 hover:cursor-pointer hover:bg-purple-200"
        >
          Profile
        </Link>
        <Link
          href={"/dashboard/myblogs"}
          className="block w-full text-center
      p-3 hover:cursor-pointer hover:bg-purple-200"
        >
          My Blogs
        </Link>
        <Link
          href={"/dashboard/settings"}
          className="block w-full text-center
      p-3 hover:cursor-pointer hover:bg-purple-200"
        >
          Settings
        </Link>
      </div>
      <div className="flex w-3/4  border-r-2">{children}</div>
    </div>
  );
}
