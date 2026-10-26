/**
 * Renders a schema.org JSON-LD block. Used for types that next-seo
 * (v6) has no ready-made component for: WebSite, Service, ProfilePage.
 * Organization and Breadcrumb schemas use next-seo's own components.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so page content can never close the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
