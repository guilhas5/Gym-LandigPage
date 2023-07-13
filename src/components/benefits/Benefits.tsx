import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import TitleText from "@/shared/TitleText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 " />,
    title: "State of the Art Facilities",
    description:
      "Experience excellence at our state-of-the-art fitness facilities. With cutting-edge equipment and modern amenities, we provide the perfect environment for achieving your fitness goals.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Diverse Classes",
    description:
      "Discover a world of fitness with our diverse classes. From high-energy cardio to soothing yoga, our wide range of classes caters to all fitness levels and interests. Join us and explore new horizons in your fitness journey.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 " />,
    title: "Expert and Pro Trainers",
    description:
      "Unleash your potential with expert and pro trainers. Our highly skilled and experienced trainers are dedicated to helping you reach new heights in your fitness journey. Receive personalized guidance and unlock your full potential.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/*HEADER */}
        <div className="md:my-5 md:w-3/5 pt-8">
          <TitleText>MORE THAN JUST A GYM.</TitleText>
          <p className="my-5 text-lg">
            Elevate your fitness experience with us. Our exceptional equipment
            and attentive professionals are dedicated to providing personalized
            care, ensuring every detail is tailored to you. Experience top-notch
            service and guidance as we support you on your fitness journey
          </p>
        </div>
        {/*BENEFITS */}
        <motion.div
          className="mt-5 md:flex items-center justify-between gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/*GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits graphic"
            src={BenefitsPageGraphic}
          />
          {/*DESCRIPTION*/}
          <div>
            {/*TITLE*/}
            <div className="relative">
              <div
                className="before:absolute before:-top-20 
              before:-left-20 before:z-[-1] before:content-abstractwaves"
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.7 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <TitleText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </TitleText>
                </motion.div>
              </div>
            </div>
            {/*DESCRIPTION*/}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5 text-lg">
                Unlock a world of fitness and join the ranks of millions of
                delighted members. At our gym, you'll find a haven where your
                fitness aspirations become a reality. With state-of-the-art
                equipment and a team of dedicated experts, we're here to support
                you every step of the way. Experience the joy of achieving your
                fitness goals alongside a vibrant community of like-minded
                individuals.
              </p>
              <p className="mb-8 text-lg">
                Join our thriving community of happy members and witness the
                transformative power of exercise. From invigorating group
                classes to cutting-edge training programs, we offer a wide range
                of fitness options to keep you engaged and motivated. Take the
                first step towards a healthier lifestyle and experience the joy
                of being part of a gym that genuinely cares about your
                well-being. Don't wait any longer become a member today and
                unlock a world of fitness possibilities.
              </p>
            </motion.div>
            {/*BUTTON*/}
            <div className="relative mt-16">
              <div className="before:absolute before:right-40 before:-bottom-20 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
