/**
 * Get the correct asset path for images
 * Handles both development and production (GitHub Pages) environments
 * @param {string} path - The path to the asset (e.g., '/assets/images/profile.png')
 * @returns {string} - The correct full path including base URL
 */
export const getAssetPath = (path) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    // import.meta.env.BASE_URL is set by Vite config
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};
