import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/FAQ.css";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

function FAQRow({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-row" onClick={() => setOpen(!open)}>
      <div className="faq-row__header">
        <span className={`faq-row__question ${open ? "faq-row__question--open" : ""}`}>
          {question}
        </span>
        <motion.span
          className="faq-row__icon"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          +
        </motion.span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-row__answer"
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ title = "Common Questions", items }: FAQProps) {
  return (
    <section className="faq w-full px-6 md:px-16 lg:px-40 py-20">
      <div className="faq__inner grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left — title */}
        <div className="faq__title-col">
          <h2 className="faq__title">{title}</h2>
        </div>

        {/* Right — questions */}
        <div className="faq__list">
          {items.map((item, i) => (
            <FAQRow key={i} question={item.question} answer={item.answer} />
          ))}
        </div>

      </div>
    </section>
  );
}