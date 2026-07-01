"use client";

import { useEffect } from "react";
import { animate, createTimeline, stagger, utils } from "animejs";

export default function LoginAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    createTimeline({ defaults: { ease: "outQuad" } })
      .add("[data-anim='logo']", { opacity: [0, 1], translateY: [-16, 0], duration: 600 })
      .add("[data-anim='title']", { opacity: [0, 1], translateY: [12, 0], duration: 500 }, "-=300")
      .add("[data-anim='subtitle']", { opacity: [0, 1], translateY: [12, 0], duration: 500 }, "-=350")
      .add("[data-anim='card']", { opacity: [0, 1], translateY: [20, 0], duration: 600 }, "-=350");

    animate(".anim-blob", {
      translateX: () => utils.random(-14, 14),
      translateY: () => utils.random(-12, 12),
      duration: 6000,
      ease: "inOutSine",
      alternate: true,
      loop: true,
      delay: stagger(1200),
    });
  }, []);

  return null;
}
