'use client';

import { motion } from 'framer-motion';
import { Briefcase, Cpu, Network, Users, Info } from 'lucide-react';
import { lessonsLearnedContent } from '@/data/content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};


interface CategoryCardProps {
  category: typeof lessonsLearnedContent.categories[0];
}


function CategoryCard({ category }: CategoryCardProps) {

  const icons = {
    Briefcase,
    Cpu,
    Network,
    Users,
  };

  const Icon =
    icons[category.icon as keyof typeof icons] ?? Briefcase;

  const accentText =
    category.color.replace('bg-', 'text-').split(' ')[0];


  return (
    <motion.div
      variants={itemVariants}
      className="min-h-0"
    >

      <div
        className="
          h-full
          rounded-xl
          bg-gradient-to-br
          from-white/[0.05]
          to-transparent
          border
          border-white/10
          overflow-hidden
        "
      >

        <div
          className="
            h-full
            p-3.5
            flex
            flex-col
            min-h-0
          "
        >

          {/* Header */}
          <div
            className="
              flex
              items-center
              gap-2
              mb-3
              shrink-0
            "
          >

            <div
              className={`
                p-1.5
                rounded-lg
                ${category.color}
              `}
            >
              <Icon className="w-4 h-4" />
            </div>


            <h3
              className="
                text-base
                font-semibold
                text-white
                truncate
              "
            >
              {category.title}
            </h3>

          </div>



          {/* Items */}
          <ul
            className="
              flex-1
              min-h-0
              space-y-1.5
              overflow-hidden
            "
          >

            {category.items.map((item, i) => (

              <li
                key={i}
                className="
                  text-sm
                  text-gray-300
                  flex
                  items-start
                  gap-1.5
                  leading-snug
                "
              >

                <span
                  className={`
                    mt-0.5
                    shrink-0
                    ${accentText}
                  `}
                >
                  →
                </span>


                <span>
                  {item}
                </span>

              </li>

            ))}

          </ul>




          {/* General Awareness */}
          {category.generalAwareness && (

            <div
              className="
                mt-2
                pt-2
                border-t
                border-white/10
                shrink-0
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-1
                  mb-1.5
                "
              >

                <Info
                  className="
                    w-3.5
                    h-3.5
                    text-teal-400
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-mono
                    text-teal-400
                    uppercase
                    tracking-wide
                  "
                >
                  General Awareness
                </span>

              </div>



              <div
                className="
                  flex
                  flex-wrap
                  gap-1
                  max-h-10
                  overflow-hidden
                "
              >

                {category.generalAwareness.map((item) => (

                  <span
                    key={item}
                    className="
                      px-2
                      py-1
                      text-[10px]
                      font-mono
                      rounded-full
                      bg-white/5
                      border
                      border-white/10
                      text-gray-400
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          )}

        </div>

      </div>

    </motion.div>
  );
}




export default function Slide4Lessons() {

  return (

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"

      className="
        w-screen
        h-[100dvh]
        flex
        flex-col
        overflow-hidden
        bg-grid-pattern
        bg-[length:40px_40px]
        px-5
        md:px-8
        py-5
      "
    >


      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="
          mb-3
          shrink-0
        "
      >

        <div
          className="
            flex
            items-center
            gap-2.5
          "
        >

          <div
            className="
              w-0.5
              h-6
              rounded-full
              bg-gradient-to-b
              from-teal-400
              to-teal-600
            "
          />


          <h1
            className="
              text-xl
              md:text-2xl
              font-bold
              text-white
            "
          >
            {lessonsLearnedContent.title}
          </h1>

        </div>


        <p
          className="
            ml-3
            mt-1
            text-xs
            font-mono
            text-gray-500
          "
        >
          Skills acquired & guidance from peers
        </p>


      </motion.div>




      {/* Grid */}

      <div
        className="
          flex-1
          min-h-0
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
        "
      >

        {lessonsLearnedContent.categories.map((category) => (

          <CategoryCard
            key={category.title}
            category={category}
          />

        ))}


      </div>


    </motion.div>

  );
}