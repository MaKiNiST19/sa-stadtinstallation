interface SchemaJsonLdProps {
  schema: unknown | unknown[];
}

/**
 * Rendert JSON-LD als <script> - serverkomponente, keine Hydration.
 * Akzeptiert ein einzelnes Schema-Objekt oder ein Array.
 */
export default function SchemaJsonLd({ schema }: SchemaJsonLdProps) {
  const data = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {data.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
