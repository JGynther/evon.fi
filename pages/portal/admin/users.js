import { supabaseServer, createAdminLogEntry } from "@lib/supabase";

import { Wrapper, Content, Sidebar } from "@components/admin/layout";

export default function Admin({ user, data }) {
  return (
    <Wrapper>
      <Sidebar user={user} />
      <Content>
        <div className="h-12 flex flex-none px-4 items-center border-b border-gray-700"></div>
        <div className="h-10 flex-none border-b border-gray-700 px-4"></div>
        <div className="h-full overflow-y-auto px-4 text-sm text-white text-opacity-80">
          {data.map((item, index) => (
            <div key={index} className="flex font-mono text-xs py-1">
              <div className="w-72">{item.email}</div>
              <div className="w-56">{item.last_sign_in_at}</div>
              <div className="w-56">{item.recovery_sent_at}</div>
            </div>
          ))}
        </div>
        <div className="h-10 flex-none border-t border-gray-700 px-4"></div>
      </Content>
    </Wrapper>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabaseServer.auth.api.getUserByCookie(req);

  if (!user) return { redirect: { destination: "/login", permanent: false } };

  const userdata = await supabaseServer
    .from("user_roles")
    .select("id, role")
    .eq("id", user.id)
    .then((r) => r.data);

  if (!userdata || !(userdata[0]?.role === "admin"))
    return { redirect: { destination: "/portal", permanent: false } };

  await createAdminLogEntry({
    event: "admin_login_users",
    userid: user.id,
    email: user.email,
  });

  const { data, error } = await supabaseServer.auth.api.listUsers();

  return {
    props: { user, data },
  };
}
