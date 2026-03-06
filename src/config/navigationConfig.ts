export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  href: string;
  description?: string;
}

export const navigationItems: NavItem[] = [
  {
    name: 'Accueil',
    href: '/',
  },
  {
    name: 'À propos',
    href: '/about',
  },
  {
    name: 'Produits',
    href: '/products',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'T-shirts',
        href: '/products/tshirts',
        description: 'Homme, Femme, Enfant',
      },
      {
        name: 'Sweats & Hoodies',
        href: '/products/sweats',
        description: 'Collections streetwear',
      },
      {
        name: 'Totes bags',
        href: '/products/bags',
        description: 'Sacs personnalisés',
      },
      {
        name: 'Casquettes',
        href: '/products/caps',
        description: 'Accessoires',
      },
    ],
  },
  {
    name: 'Catégories',
    href: '/categories',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Nouveautés',
        href: '/categories/new',
      },
      {
        name: 'Meilleures ventes',
        href: '/categories/bestsellers',
      },
      {
        name: 'Collections',
        href: '/categories/collections',
      },
      {
        name: 'Personnalisation',
        href: '/categories/custom',
      },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: 'Instagram',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: 'Facebook',
  },
];