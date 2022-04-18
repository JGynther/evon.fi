import Head from "next/head";

import Wrapper from "@components/layout/wrapper";
import Content from "@components/layout/content";
import Navigation, { PortalNavigation } from "@components/layout/navigation";
import Footer from "@components/layout/footer";

export default function Layout({ title, meta, children }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}

export function Headless({ title, meta, children }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <Content>
        <div className="min-h-screen flex justify-center items-center">
          {children}
        </div>
      </Content>
    </Wrapper>
  );
}

export function Portal({ title, meta, children }) {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      <PortalNavigation />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
}
