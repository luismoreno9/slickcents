type JsonLdProps = {
  data: Record<string, unknown>;
};

/**
 * Renders a schema.org JSON-LD <script> block.
 * Server-safe: emits a static <script type="application/ld+json"> tag.
 */
export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; no user-controlled HTML.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
