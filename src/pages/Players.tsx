import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { PlayerType } from "@/shared/types";
import Player from "@/scenes/player";
import Loader from "@/scenes/loader";
import Banner from "@/assets/squadBanner.png";

import { db } from "@/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

type Props = {};

const Players = (props: Props) => {
  const [loading, setLoading] = useState<Boolean>(true);

  // firebase
  const [players, setPlayers] = useState<PlayerType[]>([]);
  const playersCollectionRef = collection(db, "players");

  useEffect(() => {
    const getPlayers = async () => {
      setLoading(true);
      const data = await getDocs(playersCollectionRef);
      setPlayers(
        // data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as PlayerType))
        data.docs.map((doc) => ({ ...doc.data() } as PlayerType))
      );
      setLoading(false);
    };

    getPlayers();
  }, []);

  //example
  const storage = getStorage();
  getDownloadURL(ref(storage, "images/rashford.png")).then((url) => {
    console.log(url);
  });

  return (
    <>
      <section
        id="players"
        className="gap-16 bg-gray-20 py-14 md:h-full md:pb-0"
      >
        <motion.div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
          {/* MAIN HEADER */}
          <div className="z-10 my-4 md:mt-32 md:basis-2/6">
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
                <img alt="home-page-text" src={Banner} />
              </div>

              <p className="mt-1 text-lg">
                Manchester United Football Club's first team squad is composed
                of talented and experienced players. The team has a strong
                defensive line, a creative midfield, and a potent attack. Key
                players include David De Gea, Raphael Varane, Bruno Fernandes,
                and Marcus Rashford. The squad is geared towards achieving
                success and aims to bring glory to the club.
              </p>
            </motion.div>
          </div>

          {/* IMAGE */}
          <div className="flex basis-3/5 justify-center md:z-10 md:justify-items-end">
            <div className="mt-10 w-full overflow-x-auto overflow-y-hidden">
              {loading ? (
                <Loader />
              ) : (
                <ul className="w-64 whitespace-nowrap">
                  {players.map((item: PlayerType, index) => (
                    <Player
                      key={item.name}
                      name={item.name}
                      position={item.position}
                      age={item.age}
                      image={item.image}
                    />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Players;
