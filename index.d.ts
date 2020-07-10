export interface IPrintareaOption {
  standard?: 'html5' | 'loose' | 'strict'
  extraHead?: string
  extraCss?: string
  popTitle?: string
  endCallback?: () => any
  ids: string
}

export default function (id: string, option?: IPrintareaOption): void
