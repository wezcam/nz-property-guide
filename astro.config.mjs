// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'NZ Private Sale Guide',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/your-username/your-repo' }],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        { label: 'Introduction & Overview', link: '/intro' },
                    ],
                },
                {
                    label: '1. Preparation',
                    items: [
                        { label: 'Pricing Your Home', link: '/preparation/pricing' },
                        { label: 'Presentation & Staging', link: '/preparation/presentation' },
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