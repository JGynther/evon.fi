import Link from "next/link";

export function Wrapper({ children }) {
  return <div className="flex h-full text-white bg-gray-900">{children}</div>;
}

export function Content({ children }) {
  return (
    <div className="flex flex-col h-screen w-full overflow-x-hidden">
      {children}
    </div>
  );
}

export function Sidebar({ user }) {
  return (
    <div className="h-screen flex flex-col flex-none border-r border-gray-700 w-72">
      <div className="h-12 flex flex-none items-center border-b border-gray-700 px-4 tracking-wider">
        Admin Dashboard
      </div>
      <div className="px-4 py-8 space-y-2 border-b border-gray-700">
        <div className="px-4 text-xs text-white text-opacity-60">General</div>
        <div className="flex flex-col space-y-3 text-white text-opacity-80 text-sm">
          <NavItem href="/portal/admin/logs">Admin logs</NavItem>
          <NavItem href="/portal/admin/users">Manage users</NavItem>
          <NavItem href="/portal/admin">Blogs</NavItem>
        </div>
      </div>
      <div className="h-full"></div>
      <div className="h-10 px-4 flex flex-none items-center border-t border-gray-700">
        <span className="bg-opacity-80 rounded px-4 text-xs text-white text-opacity-80 tracking-wider">
          Logged in as {user.email}
        </span>
      </div>
    </div>
  );
}

function NavItem({ children, href }) {
  return (
    <Link href={href} passHref>
      <a className="hover:bg-gray-800 transition rounded px-4 py-2">
        {children}
      </a>
    </Link>
  );
}
