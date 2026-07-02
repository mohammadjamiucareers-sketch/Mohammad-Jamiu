import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { successMetricsData } from "../data";

export const Metrics = () => {
  const [counts, setCounts] = useState<number[]>(successMetricsData.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds animation
    const steps = 50;
    const stepTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;

      setCounts(
        successMetricsData.map((metric) => {
          // Linear progress to full value
          const value = Math.floor(metric.value * progress);
          return Math.min(value, metric.value);
        })
      );

      if (stepCount >= steps) {
        clearInterval(timer);
        setCounts(successMetricsData.map((metric) => metric.value));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted]);

  return (
    <section
      id="metrics"
      ref={sectionRef}
      className="py-16 md:py-24 bg-primary text-white border-t border-b border-white/5 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 md:gap-6 text-center" id="metrics-grid">
          {successMetricsData.map((metric, index) => (
            <div key={metric.id} className="space-y-2 flex flex-col justify-center" id={`metric-col-${metric.id}`}>
              {/* Counter Display */}
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-accent tracking-tight flex items-baseline justify-center">
                {metric.prefix && <span className="text-xl sm:text-2xl mr-0.5">{metric.prefix}</span>}
                <span>{counts[index].toLocaleString()}</span>
                <span className="text-accent/90">{metric.suffix}</span>
              </div>

              {/* Label */}
              <div className="text-xs sm:text-sm font-semibold tracking-wide text-slate-300 uppercase leading-snug">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
