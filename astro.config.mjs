// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://sellmypropertyguide.nz',
  integrations: [
    starlight({
      title: 'NZ Private Sale Guide',
      customCss: [
        './src/styles/custom.css',
      ],
      // Inject the Google AdSense code globally
      head: [
        {
          tag: 'script',
          attrs: {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8528347282216803',
            async: true,
            crossorigin: 'anonymous',
          },
        },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction & Overview', link: '/intro' },
          ],
        },
        {
          label: '1. Preparation & Marketing',
          items: [
            { label: 'Initial Legal Setup & Disclosures', link: '/preparation/legal-prep' },
            { label: 'Pricing Your Home', link: '/preparation/pricing' },
            { label: 'Presentation & Staging', link: '/preparation/presentation' },
            { label: 'Trade Me & Open Homes', link: '/preparation/trademe' },
          ],
        },
        {
          label: '2. Legal & Paperwork',
          items: [
            { label: 'The Sale Agreement', link: '/legal/sale-agreement' },
          ],
        },
      ],
    }),
  ],
});