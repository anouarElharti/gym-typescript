import { SelectedPage, OurClassesType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import OurClass from "./OurClass";

const ourclasses: Array<OurClassesType> = [
  {
    name: "Weight Trainig Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet accumsan mi. Donec pellentesque pulvinar velit non tempor.",
    image: image1,
  },
  {
    name: "Fitness Classes",
    image: image2,
  },
  {
    name: "Dance Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet accumsan mi. Donec pellentesque pulvinar velit non tempor.",
    image: image3,
  },
  {
    name: "Spin Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet accumsan mi. Donec pellentesque pulvinar velit non tempor.",
    image: image4,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet accumsan mi. Donec pellentesque pulvinar velit non tempor.",
    image: image5,
  },
  {
    name: "Meditation Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet accumsan mi. Donec pellentesque pulvinar velit non tempor.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              The mind is the most important part of achieving any fitness goal.
              Mental change always comes before physical change.
              <br />
              I will beat her. I will train harder. I will eat cleaner. I know
              her strengths. I've lost to her before but not this time.
              <br />
              She is going down. I have the advantage because I know her well.
              She is the old me
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {ourclasses.map((item: OurClassesType, index) => (
              <OurClass
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
