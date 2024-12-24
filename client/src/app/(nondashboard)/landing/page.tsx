"use client";

import React from "react";
import Link from "next/link";
import {motion} from 'framer-motion';
import Image from "next/image";
import {useCarousel} from "@/hooks/use-carousel"
import { Skeleton } from "@/components/ui/skeleton";

const LoadingSkeleton = () => {
  return (
    <div className="landing-skeleton">
      <div className="landing-skeleton__hero">
        <div className="landing-skeleton__hero-content">
          <Skeleton className="landing-skeleton__title"/>
          <Skeleton className="landing-skeleton__subtitle"/>
          <Skeleton className="landing-skeleton__subtitle-secondary"/>
          <Skeleton className="landing-skeleton__button"/>
        </div>
        <Skeleton className="landing-skeleton__hero-image"/>
      </div>

<div className="landing-skeleton__featured">
    <Skeleton className="landing-skeleton__featured-title"/>
    <Skeleton className="landing-skeleton__featured-description"/>

    <div className="landing-skeleton__tags">
      {[1,2,3,4,5].map((_,index)=>(
        <Skeleton className="landing-skeleton__tag" key={index}/>
      ))}
    </div>

    <div className="landing-skeleton__courses">
      {[1,2,3,4,5].map((_,index)=>(
        <Skeleton className="landing-skeleton__course" key={index}/>
      ))}
    </div>
</div>

    </div>
  )
}

const Landing = () => {

  // custom hook used to iterate over images and return it every 5s interval
    const currentImage = useCarousel({totalImages: 3})

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="landing"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing__hero"
      >
        <div className="landing__hero-content">
          <h1 className="landing__title">Courses</h1>
          <p className="landing__description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta voluptate ipsum beatae qui eaque mollitia eligendi culpa veritatis accusamus autem! Ad quae fugit, dolor quibusdam vitae numquam aliquam natus rem?
          </p>
          <div className="landing__cta">
            <Link href ="/search">
            <div className="landing__cta-button">Search Courses</div>
            </Link>
          </div>
        </div>
        <div className="landing__hero-images">
            {["/hero1.jpg","/hero2.jpg","/hero3.jpg"].map((src,index)=>(
                <Image
                key = {src}
                src = {src}
                alt = {`Hero Banner ${index +1}`}
                priority = {index === currentImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33w"
                fill={true}
                className={`landing__hero-image ${index==currentImage ? "landing__hero-image--active": ""}`}
                />
            ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ amount: 0.3, once: true }}
        className="landing__featured"
      >
        <h2 className="landing__featured-title">Featured Courses</h2>
        <p className="landing__featured-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, modi ab iusto maiores consectetur doloremque. Inventore veritatis nesciunt culpa doloribus, enim laborum omnis ex cupiditate voluptate vero nihil aliquid nobis incidunt laudantium ipsum itaque perferendis!
        </p>

        <div className="landing__tags">
          {[
            "Tag 1",
            "Tag 2",
            "Tag 3",
            "Tag 4",
            "Tag 5"
            ].map((tag,index)=>(
              <span key={index} className="landing__tag">
                {tag}
              </span>
            ))}
        </div>

        <div className="landing__courses">
          {/* COURSES DISPLAY */}
        </div>
        </motion.div>
    </motion.div>
  );
};

export default Landing;
