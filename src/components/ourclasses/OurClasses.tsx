import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import TitleText from "@/shared/TitleText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Experience the power of weight training classes for your fitness goals and get stronger at our gym.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Discover the serenity of yoga classes at our gym. Enhance your well-being and flexibility through expert-led sessions.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core with our ab classes. Achieve a toned midsection and improved stability with expert guidance",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Embark on thrilling adventures with our adventure classes. Push your limits and conquer new challenges in a dynamic and supportive environment.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Experience a variety of fitness classes designed to boost your energy and transform your body. Join us and discover the joy of working out in a motivating group setting.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Level up your fitness with our training classes. Expert instructors, dynamic workouts, and real results await you.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40 ">
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
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <TitleText>OUR CLASSES</TitleText>
            <p className="py-5 text-lg">
              Welcome to Our Classes! At our gym, we offer a diverse range of
              exciting and engaging fitness classes designed to suit all levels
              and interests. Whether you're looking to improve your strength,
              flexibility, or cardiovascular endurance, our expert instructors
              are here to guide you on your fitness journey. From high-energy
              cardio workouts to calming yoga sessions, our classes provide a
              dynamic and supportive environment where you can challenge
              yourself and achieve your goals.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
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
