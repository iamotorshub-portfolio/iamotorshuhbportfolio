import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingText = ({ children, className, delay = 0 }: FloatingTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-20 opacity-0 blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ text, className, delay = 0 }: SplitTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-all duration-500 ease-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          )}
          style={{
            transitionDelay: isVisible ? `${i * 30}ms` : "0ms",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

interface ScaleTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ScaleText = ({ children, className }: ScaleTextProps) => {
  return (
    <div className={cn("inline-block hover:scale-110 transition-transform duration-300 cursor-default", className)}>
      {children}
    </div>
  );
};
