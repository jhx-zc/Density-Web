import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'

import messages from 'src/i18n'

const i18n = createI18n({
  locale: 'zh',
  messages,
})

export default boot(({ app }) => {
  // Set i18n instance on app
  app.use(i18n)
})

export function changeLocation(location = 'zh') {
  i18n.global.locale = location
}

export { i18n }
