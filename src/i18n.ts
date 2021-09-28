import { register, init } from 'svelte-i18n'

register('en', () => import('./localizations/en.json'))
register('de', () => import('./localizations/de.json'))
register('fr', () => import('./localizations/fr.json'))

init({
  fallbackLocale: 'en',
  initialLocale: 'fr',
})
