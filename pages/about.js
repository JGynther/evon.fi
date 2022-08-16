import Layout from "@components/layout";
import About from "@components/about";
import Welcome from "@components/welcome";
import Values from "@components/values";
import FAQ from "@components/faq";
import BecomeAnOwner from "@components/becomeanowner";
import Teams from "@components/teams";
import Transactions from "@components/transactions";

export default function Home() {
  return (
    <Layout title="Evon Capital">
      <About />
      <Transactions />
      <Welcome />
      <Values />
      <BecomeAnOwner />
      <Teams />
      <FAQ />
    </Layout>
  );
}
