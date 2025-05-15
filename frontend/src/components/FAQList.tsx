import { BrandSettings, FAQ } from "../types/brand";

interface FAQListProps {
  faqs: FAQ[];
  settings: BrandSettings;
}

export const FAQList: React.FC<FAQListProps> = ({ faqs, settings }) => (
  <div className="rounded-lg bg-white p-8 shadow-lg">
    <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
      Preguntas frecuentes para vendedores
    </h2>
    <div className="space-y-6">
      {faqs
        .filter((faq) => faq.always || settings.couponEnabled)
        .map((faq, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 pb-6 last:border-b-0"
          >
            <h3 className="mb-3 text-lg font-semibold text-gray-800">
              {faq.question}
            </h3>
            <p className="whitespace-pre-line text-gray-600">
              {typeof faq.answer === "function"
                ? faq.answer(settings)
                : faq.answer}
            </p>
          </div>
        ))}
    </div>
  </div>
);
