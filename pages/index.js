import Layout from "@components/layout";
import Hero from "@components/hero";
import About from "@components/about";
import Welcome from "@components/welcome";
import Values from "@components/values";
import FAQ from "@components/faq";
import BecomeAnOwner from "@components/becomeanowner";
import Teams from "@components/teams";
import { Posts } from "./blog";
import Transactions from "@components/transactions";

export default function Home() {
  const meta = <meta name="description" content="Evon Capital on " />;
  return (
    <Layout title="Evon Capital">
      <Hero />
      <About />
      <Transactions />
      <Welcome />
      <Values />
      <BecomeAnOwner />
      <Teams />
      <Posts />
      <FAQ />
    </Layout>
  );
}
