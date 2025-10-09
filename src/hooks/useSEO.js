import { useEffect } from 'react';

export const useSEO = (title, description, keywords = '') => {
    useEffect(() => {
        // Set document title
        if (title) {
            document.title = title;
        }

        // Update meta description
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) {
                metaDescription.setAttribute('content', description);
            } else {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                metaDescription.setAttribute('content', description);
                document.head.appendChild(metaDescription);
            }
        }

        // Update meta keywords
        if (keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) {
                metaKeywords.setAttribute('content', keywords);
            } else {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                metaKeywords.setAttribute('content', keywords);
                document.head.appendChild(metaKeywords);
            }
        }

        // Update Open Graph description
        if (description) {
            let ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) {
                ogDescription.setAttribute('content', description);
            } else {
                ogDescription = document.createElement('meta');
                ogDescription.setAttribute('property', 'og:description');
                ogDescription.setAttribute('content', description);
                document.head.appendChild(ogDescription);
            }
        }

        // Update Twitter description
        if (description) {
            let twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) {
                twitterDescription.setAttribute('content', description);
            } else {
                twitterDescription = document.createElement('meta');
                twitterDescription.setAttribute('name', 'twitter:description');
                twitterDescription.setAttribute('content', description);
                document.head.appendChild(twitterDescription);
            }
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }, [title, description, keywords]);
};
