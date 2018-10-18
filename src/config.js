export const API_ROOT =
    process.env.NODE_ENV === 'production'
        ? 'https://portal.futurefertile.com/'
        : 'https://dev.portal.futurefertile.com/'
