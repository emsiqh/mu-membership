import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomeImg.png";
import Stadium from "@/assets/oldtrafford.png";
import Adidas from "@/assets/Adidas.png";
import Teamviewer from "@/assets/TeamViewer.png";
import Tezos from "@/assets/TezosLogo.png";
import Dxc from "@/assets/DXC.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-14 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 my-4 md:mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              {/* <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext"> */}
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-1 text-lg">
              Manchester United is a successful and popular professional
              football club based in Manchester, England. It has won many titles
              and has produced many legendary players. The club plays at Old
              Trafford Stadium and is considered one of the most valuable and
              richest football clubs in the world, with a large fan base.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 mb-2 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-base font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn more</p>
            </AnchorLink>
            <Link to="/players" className="flex gap-2">
              <p className="text-base font-bold text-primary-500 underline hover:text-secondary-500">
                First team squad
              </p>
              <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            </Link>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:justify-items-end">
          <img className="rounded-xl" alt="home-pageGraphic" src={Stadium} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[112px] w-full bg-primary-black py-10">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between gap-8">
              <img
                className="h-auto max-h-[25px] w-auto max-w-[120px]"
                alt="adidas-sponsor"
                src={Adidas}
              />
              <img
                className="h-auto max-h-[25px] w-auto max-w-[120px]"
                alt="teamviewer-sponsor"
                src={Teamviewer}
              />
              <img
                className="h-auto max-h-[25px] w-auto max-w-[120px]"
                alt="tezor-sponsor"
                src={Tezos}
              />
              <img
                className="h-auto max-h-[25px] w-auto max-w-[120px]"
                alt="dxc-sponsor"
                src={Dxc}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
