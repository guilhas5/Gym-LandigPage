import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import TitleText from "@/shared/TitleText";
import Benefit from "./Benefit";

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
        <div className="md:my-5 md:w-3/5">
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
      </motion.div>
    </section>
  );
};

export default Benefits;
