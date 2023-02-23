import dynamic from "next/dynamic";
import About from "../components/About";
import MainBanner from "../components/MainBanner";

export default () => {
  const Team = dynamic(
    () => import("../components/Team").then((cmp) => cmp.default),
    { ssr: false }
  );
  const Philosophy = dynamic(
    () => import("../components/Philosophy").then((cmp) => cmp.default),
    { ssr: false }
  );
  const WorkProcess = dynamic(
    () => import("../components/WorkProcess").then((cmp) => cmp.default),
    { ssr: false }
  );
  const JoinUs = dynamic(
    () => import("../components/JoinUs/JoinUs").then((cmp) => cmp.default),
    { ssr: false }
  );
  const Competencies = dynamic(
    () => import("../components/Competencies").then((cmp) => cmp.default),
    { ssr: false }
  );
  const References = dynamic(
    () => import("../components/References").then((cmp) => cmp.default),
    { ssr: false }
  );
  const Contact = dynamic(
    () => import("../components/Contact").then((cmp) => cmp.default),
    { ssr: false }
  );

  return (
    <>
      <section id="home">
        <MainBanner />
        <About />
        <div className="divider div-transparent div-arrow-down"></div>
      </section>

      <Team />
      <Philosophy />
      <WorkProcess />
      <JoinUs />
      <Competencies />
      <References />
      <Contact />
    </>
  );
};
