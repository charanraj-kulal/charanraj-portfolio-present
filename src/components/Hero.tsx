"use client";
import React from "react";
import { HeroParallax } from "../components//ui/hero-parallax";

const Hero: React.FC = () => {
  const products = [
    {
      title: "Aavirbhav",
      link: "https://aavirbhav.tech/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(6).png",
    },
    {
      title: "Webhooksstudio",
      link: "https://webhooksstudio.vercel.app/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(1).png",
    },
    {
      title: "Study Sphere",
      link: "https://study-sphere-frontend.vercel.app/",
      thumbnail: "https://ik.imagekit.io/charanraj/image%20(12).png",
    },

    {
      title: "LMS",
      link: "#",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(4).png",
    },
    {
      title: "Jak Generation",
      link: "https://charanraj-kulal.github.io/Jak-Generation-Test/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/Screenshot_17.png",
    },
    {
      title: "Fittness App",
      link: "#",
      thumbnail: "https://ik.imagekit.io/charanraj/Screenshot_16.png",
    },

    {
      title: "Restaurant App",
      link: "https://charanraj-kulal.github.io/restaurant-template/",
      thumbnail: "https://ik.imagekit.io/charanraj/Screenshot_17.png",
    },
    {
      title: "Aavirbhav",
      link: "https://aavirbhav.tech/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(6).png",
    },
    {
      title: "Webhooksstudio",
      link: "https://webhooksstudio.vercel.app/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(1).png",
    },
    {
      title: "Study Sphere",
      link: "https://study-sphere-frontend.vercel.app/",
      thumbnail: "https://ik.imagekit.io/charanraj/image%20(12).png",
    },

    {
      title: "LMS",
      link: "#",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(4).png",
    },
    {
      title: "Jak Generation",
      link: "https://charanraj-kulal.github.io/Jak-Generation-Test/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/Screenshot_17.png",
    },
    {
      title: "Fittness App",
      link: "#",
      thumbnail: "https://ik.imagekit.io/charanraj/Screenshot_16.png",
    },

    {
      title: "Restaurant App",
      link: "https://charanraj-kulal.github.io/restaurant-template/",
      thumbnail: "https://ik.imagekit.io/charanraj/Screenshot_17.png",
    },
    {
      title: "Aavirbhav",
      link: "https://aavirbhav.tech/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(6).png",
    },
    {
      title: "Webhooksstudio",
      link: "https://webhooksstudio.vercel.app/",
      thumbnail: "https://ik.imagekit.io/charanraj/UI/image%20(1).png",
    },
    {
      title: "Study Sphere",
      link: "https://study-sphere-frontend.vercel.app/",
      thumbnail: "https://ik.imagekit.io/charanraj/image%20(12).png",
    },
  ];
  return <HeroParallax products={products} />;
};

export default Hero;
