import { type ReactNode } from "react";

interface FeaturedSnippetProps {
  question: string;   // H2 / H3 Frage
  answer: ReactNode;  // prägnante Antwort, idealerweise 40-55 Wörter
  as?: "h2" | "h3";
}

/**
 * Frage-Antwort-Block speziell für Google Featured Snippets und AI Overviews.
 * Die Antwort sollte in den ersten 2 Sätzen eine klare, direkte Antwort liefern.
 */
export default function FeaturedSnippet({ question, answer, as = "h2" }: FeaturedSnippetProps) {
  const Heading = as;
  return (
    <section className="featured-snippet">
      <Heading className="featured-snippet__question">{question}</Heading>
      <div className="featured-snippet__answer">{answer}</div>
    </section>
  );
}
