"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
} & HTMLAttributes<HTMLElement>;

/**
 * Optional scroll fade-in. Defaults to visible so content is never
 * stuck invisible without JS or for reduced-motion users.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  id,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      id={id}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0.01,
        transition: "opacity 200ms ease-out",
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
