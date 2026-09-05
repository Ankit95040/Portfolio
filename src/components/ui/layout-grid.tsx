"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  id: number;
  title?: string;
  shortDef?: string;
  content: React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  const handleClick = (card: Card) => {
    if (shouldReduceMotion) {
      // For reduced motion, toggle without animation delay
      setLastSelected(selected);
      setSelected(card);
      return;
    }
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 relative">
      {cards.map((card) => (
        <div key={card.id} className={cn(card.className, "relative min-h-[180px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm cursor-pointer",
              selected?.id === card.id
                ? "absolute inset-0 h-[85%] w-[92%] md:w-[60%] m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 rounded-2xl h-full w-full"
                : "rounded-2xl h-full w-full hover:border-white/15 transition-colors"
            )}
            layoutId={shouldReduceMotion ? undefined : `card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} reduceMotion={shouldReduceMotion} />}
            <ImageComponent card={card} />
            {/* Resting overlay — always visible when not selected */}
            {selected?.id !== card.id && (
              <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" aria-hidden />
                <div className="relative">
                  <h3 className="text-[15px] font-semibold tracking-tight text-white">{card.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-white/65 line-clamp-2">{card.shortDef}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn("object-cover object-center absolute inset-0 h-full w-full transition duration-200")}
      alt={card.title}
    />
  );
};

const SelectedCard = ({ selected, reduceMotion }: { selected: Card | null; reduceMotion?: boolean }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-2xl shadow-2xl relative z-[60] overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
        transition={{ duration: reduceMotion ? 0 : 0.3 }}
      />
      <motion.div
        layoutId={reduceMotion ? undefined : `content-${selected?.id}`}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
        transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
        className="relative px-6 pb-6 pt-8 z-[70] flex flex-col gap-3"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
