import { motion } from "motion/react";

export default function PageIntro({ badge, title, highlight, description }) {
  return (
    <main className="min-h-[85vh] bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="mb-6 inline-block rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2 text-sm">
            {badge}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
            {title} <span className="text-[var(--zen-gold)]">{highlight}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--muted)]">
            {description}
          </p>
        </motion.div>
      </section>
    </main>
  );
}
