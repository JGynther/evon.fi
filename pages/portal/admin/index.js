import { supabaseServer, createAdminLogEntry } from "@lib/supabase";

import { Wrapper, Content, Sidebar } from "@components/admin/layout";

export default function Admin({ user }) {
  return (
    <Wrapper>
      <Sidebar user={user} />
      <Content></Content>
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
    event: "admin_login_dashboard",
    userid: user.id,
    email: user.email,
    content: {
      role: userdata[0].role,
    },
  });

  return {
    props: { user },
  };
}
