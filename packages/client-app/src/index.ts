import '@scalar/components/style.css'

import './assets/reset.css'
import './assets/scrollbar.css'
import './assets/tailwind.css'
import './assets/variables.css'

export { default as ScalarClient } from './App.vue'
export { default as ScalarClientRequest } from './views/Request/Request.vue'
export { useWorkspace } from '@/store/workspace'
export { router } from '@/router'
