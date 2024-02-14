/**
 * array of public routes
 * do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * array of auth routes
 * this routes will redact the user to the login page if not authenticated
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register'];

/**
 * api prefix
 * @type {string}
 * @example /api
 * */
export const apiAuthPrefix = '/api/auth';

/**
 * default login redirect
 * @type {string}
 * @example /settings
 * */
export const DEFAULT_LOGIN_REDIRECT = '/settings';
