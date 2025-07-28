import { codeToHtml } from 'shiki'

export const vueCodeToHtml = async (code: string) => {
  const highlightedHtml = await codeToHtml(code, {
    lang: 'vue',
    theme: 'one-dark-pro',
  })
  const cleanHtml = highlightedHtml.replace(/background-color:[^;"]+;?/gi, '')
  return cleanHtml
}
