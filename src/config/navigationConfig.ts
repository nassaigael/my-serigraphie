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
    href: '#hero',
  },
  {
    name: 'À propos',
    href: '#about',
  },
  {
    name: 'Produits',
    href: '#products',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'T-shirts',
        href: '#tshirts',
        description: 'Homme, Femme, Enfant',
      },
      {
        name: 'Sweats & Hoodies',
        href: '#sweats',
        description: 'Collections streetwear',
      },
      {
        name: 'Totes bags',
        href: '#bags',
        description: 'Sacs personnalisés',
      },
      {
        name: 'Casquettes',
        href: '#caps',
        description: 'Accessoires',
      },
    ],
  },
  {
    name: 'Catégories',
    href: '#categories',
    hasDropdown: true,
    dropdownItems: [
      {
        name: 'Nouveautés',
        href: '#new',
      },
      {
        name: 'Meilleures ventes',
        href: '#bestsellers',
      },
      {
        name: 'Collections',
        href: '#collections',
      },
      {
        name: 'Personnalisation',
        href: '#custom',
      },
    ],
  },
  {
    name: 'Contact',
    href: '#contact',
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