import React, { useEffect } from 'react';

interface SeoManagerProps {
  title: string;
  description: string;
  schema?: object;
}

const SeoManager: React.FC<SeoManagerProps> = ({ title, description, schema }) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Manage JSON-LD schema script
    const scriptId = 'json-ld-schema';
    let script = document.getElementById(scriptId);

    if (schema) {
        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            // FIX: Use setAttribute to prevent a TypeScript error. The 'type' property is not
            // available on the general HTMLElement type, but setAttribute is. This ensures
            // type safety while correctly setting the script type.
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }
        script.innerHTML = JSON.stringify(schema, null, 2); // Pretty print for readability in dev tools
    } else if (script) {
        // If no schema is provided for the current page, remove the old one
        script.remove();
    }

  }, [title, description, schema]);

  return null; // This component does not render any visible elements
};

export default SeoManager;
