import { inject } from 'vue'
import { editorInfoCtxKey } from './Editor'

import type { GetEditor, UseEditorReturn } from './types'

export function useEditor(getEditor: GetEditor): UseEditorReturn {
  const { editorFactory, loading, editor, crepe } = inject(editorInfoCtxKey)!

  editorFactory.value = getEditor

  return {
    loading,
    get: () => editor.value,
    getCrepe: () => crepe.value,
  }
}
