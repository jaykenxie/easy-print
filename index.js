import { EasyPrint } from './printarea'

export default function (id, option) {
  if (typeof id != 'string' || !id.startsWith('#')) {
    return console.error('id in Error')
  }
  const params = option || {
    standard: 'html5',
    endCallback() {}
  }
  new EasyPrint(Object.assign(params, { ids: id }))
}
