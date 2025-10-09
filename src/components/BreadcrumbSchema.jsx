import React from 'react';
import { useLocation } from 'react-router-dom';

const BreadcrumbSchema = () => {
    const location = useLocation();
    
    const getBreadcrumbs = () => {
        const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
        const breadcrumbs = [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://suitorguy.com/"
            }
        ];

        let currentPath = '';
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const position = index + 2;
            
            let name = '';
            switch (segment.toLowerCase()) {
                case 'collection':
                    name = 'Collections';
                    break;
                case 'locations':
                    name = 'Store Locations';
                    break;
                case 'howitworks':
                    name = 'How It Works';
                    break;
                case 'about':
                    name = 'About Us';
                    break;
                case 'contact':
                    name = 'Contact';
                    break;
                case 'why-rent':
                    name = 'Why Rent';
                    break;
                default:
                    name = segment.charAt(0).toUpperCase() + segment.slice(1);
            }

            breadcrumbs.push({
                "@type": "ListItem",
                "position": position,
                "name": name,
                "item": `https://suitorguy.com${currentPath}`
            });
        });

        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    // Don't render breadcrumb schema for home page
    if (breadcrumbs.length === 1) {
        return null;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": breadcrumbs
                })
            }}
        />
    );
};

export default BreadcrumbSchema;
