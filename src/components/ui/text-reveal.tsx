import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextReveal = ({ text, className, delay = 0 }: TextRevealProps) => {
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
    <div ref={ref} className="overflow-hidden">
      <div
        className={cn(
          "transition-all duration-1000 ease-out",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
          className
        )}
      >
        {text}
      </div>
    </div>
  );
};

interface TypewriterProps {
  words: string[];
  className?: string;
  cursorClassName?: string;
}

export const Typewriter = ({ words, className, cursorClassName }: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      {currentText}
      <span
        className={cn(
          "ml-1 inline-block w-0.5 h-[1em] bg-current animate-pulse",
          cursorClassName
        )}
      />
    </span>
  );
};

interface GlitchTextProps {
  text: string;
  className?: string;
}

export const GlitchText = ({ text, className }: GlitchTextProps) => {
  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 -z-10 text-primary animate-glitch-1"
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 -z-10 text-info animate-glitch-2"
        aria-hidden="true"
      >
        {text}
      </span>
    </div>
  );
};

interface ShimmerTextProps {
  text: string;
  className?: string;
}

export const ShimmerText = ({ text, className }: ShimmerTextProps) => {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer",
        className
      )}
    >
      {text}
    </span>
  );
};
