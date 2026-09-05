"use client";
/**
 * FloatingDock — premium macOS-style dock, compact translucent over bright background
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 top-full mt-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  aria-label={item.title}
                  title={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl"
                >
                  <div className="h-4 w-4 text-white/90">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/30 backdrop-blur-xl"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-white/70" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.div
      onMouseMove={(e) => {
        if (shouldReduceMotion) return;
        mouseX.set(e.pageX);
      }}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-14 items-end gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 pb-2 backdrop-blur-xl shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)] md:flex overflow-visible",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 28, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 28, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  // For reduced motion, use fixed size without magnification
  const fixedStyle = shouldReduceMotion ? { width: 40, height: 40 } : { width, height };
  const fixedIconStyle = shouldReduceMotion ? { width: 20, height: 20 } : { width: widthIcon, height: heightIcon };

  return (
    <a
      href={href}
      aria-label={title}
      title={title}
      className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-full"
    >
      <motion.div
        ref={ref}
        style={fixedStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-md overflow-visible"
      >
        <AnimatePresence>
          {hovered && !shouldReduceMotion && (
            <motion.div
              initial={{ opacity: 0, y: -6, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -2, x: "-50%" }}
              className="absolute top-full mt-2 left-1/2 z-50 w-fit rounded-md border border-white/10 bg-black/80 px-2 py-0.5 text-xs whitespace-pre text-white/90 backdrop-blur"
            >
              {title}
            </motion.div>
          )}
          {hovered && shouldReduceMotion && (
            <div className="absolute top-full mt-2 left-1/2 z-50 -translate-x-1/2 w-fit rounded-md border border-white/10 bg-black/80 px-2 py-0.5 text-xs whitespace-pre text-white/90">
              {title}
            </div>
          )}
        </AnimatePresence>
        <motion.div
          style={fixedIconStyle}
          className="flex items-center justify-center text-white/90"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
