import Vue from 'vue'
import ampPlugin from '~amp/plugin'
import { AMPMustache } from '~amp/components'

Vue.component(AMPMustache.name, AMPMustache)

export default async function (ctx, inject) {
  const result = ampPlugin(ctx, {
    origin: '',
    mode: 'hybrid'
  })
  if (result) {
    Object.keys(result).forEach(key => inject(key, result[key]))
  }
}
