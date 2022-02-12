import Head from "next/head";

import PageWrapper from "@components/layout/pagewrapper";
import PortalNav from "components/portal/portalnav";
import Navigation from "@components/layout/nav";
import Footer from "@components/layout/footer";

export default function Layout({ title, meta, noNav, portal, user, children }) {
  return (
    <PageWrapper>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      {!noNav && (portal ? <PortalNav user={user} /> : <Navigation />)}
      {children}
      {!noNav && <Footer />}
    </PageWrapper>
  );
}
