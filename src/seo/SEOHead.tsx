import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  canonicalUrl,
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const baseUrl = 'https://meowpc.fi';
  const fullTitle = title ? `${title} | Meow PC Store` : t('seo.defaultTitle');

  const fullDescription = description || t('seo.defaultDescription');
  const fullKeywords = keywords || t('seo.defaultKeywords');
  const fullImage =
    image ||
    'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760895293/og-image_z8tcpg.jpg';
  const fullUrl = canonicalUrl || `${baseUrl}${window.location.pathname}`;

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Helper function to set link tags
    const setLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`;

      let element = document.querySelector(selector) as HTMLLinkElement;

      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
      }

      element.setAttribute('href', href);
    };

    // Set HTML lang attribute
    document.documentElement.lang = currentLang;

    // Basic meta tags
    setMetaTag('description', fullDescription);
    setMetaTag('keywords', fullKeywords);

    // Open Graph tags
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', fullDescription, true);
    setMetaTag('og:image', fullImage, true);
    setMetaTag('og:url', fullUrl, true);
    setMetaTag('og:locale', currentLang === 'fi' ? 'fi_FI' : 'en_US', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', fullDescription);
    setMetaTag('twitter:image', fullImage);

    // Canonical URL
    setLinkTag('canonical', fullUrl);

    // Alternate language links
    if (currentLang === 'fi') {
      setLinkTag('alternate', fullUrl, 'en');
      setLinkTag('alternate', fullUrl, 'fi');
    } else {
      setLinkTag('alternate', fullUrl, 'fi');
      setLinkTag('alternate', fullUrl, 'en');
    }
  }, [
    fullTitle,
    fullDescription,
    fullKeywords,
    fullImage,
    fullUrl,
    currentLang,
  ]);

  return null; // This component doesn't render anything visible
};
