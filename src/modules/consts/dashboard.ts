export const ADD_ITEM_URL_PREFIX = 'add';

export type NavLinks = {
  to: string;
  name: string;
};

export const DASHBOARD_URL = '/dashboard';

export const DASHBOARD_URLS: Record<string, NavLinks> = {
  dashboard: { to: DASHBOARD_URL, name: 'Dashboard' },
  experts: { to: DASHBOARD_URL + '/experts', name: 'Experten' },
  projects: { to: DASHBOARD_URL + '/projects', name: 'Projekte' },
  uploads: { to: DASHBOARD_URL + '/uploads', name: 'Uploads' },
} as const;
