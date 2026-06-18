'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from 'lucide-react'

const toolbarButtonClass =
  'flex size-8 items-center justify-center rounded border border-transparent text-zinc-700 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-40'

const activeButtonClass = 'bg-zinc-200 text-black'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  if (!editor) {
    return null
  }

  return (
    <div className="overflow-hidden rounded-md border border-input bg-transparent">
      <div className="flex flex-wrap items-center gap-1 border-b border-input p-2">
        <select
          className="h-8 rounded border border-input bg-transparent px-2 text-sm outline-none"
          value={
            editor.isActive('heading', { level: 1 })
              ? 'h1'
              : editor.isActive('heading', { level: 2 })
                ? 'h2'
                : editor.isActive('heading', { level: 3 })
                  ? 'h3'
                  : 'p'
          }
          onChange={(event) => {
            const value = event.target.value

            if (value === 'p') {
              editor.chain().focus().setParagraph().run()
            }

            if (value === 'h1') {
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }

            if (value === 'h2') {
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }

            if (value === 'h3') {
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          }}
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
        </select>

        <button
          type="button"
          className={`${toolbarButtonClass} ${editor.isActive('bold') ? activeButtonClass : ''}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
          aria-label="Bold"
        >
          <Bold className="size-4" />
        </button>
        <button
          type="button"
          className={`${toolbarButtonClass} ${editor.isActive('italic') ? activeButtonClass : ''}`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Italic"
        >
          <Italic className="size-4" />
        </button>
        <button
          type="button"
          className={`${toolbarButtonClass} ${editor.isActive('strike') ? activeButtonClass : ''}`}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          aria-label="Strikethrough"
        >
          <Strikethrough className="size-4" />
        </button>
        <button
          type="button"
          className={`${toolbarButtonClass} ${editor.isActive('blockquote') ? activeButtonClass : ''}`}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          aria-label="Quote"
        >
          <Quote className="size-4" />
        </button>
        <button
          type="button"
          className={`${toolbarButtonClass} ${editor.isActive('orderedList') ? activeButtonClass : ''}`}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          aria-label="Ordered list"
        >
          <ListOrdered className="size-4" />
        </button>
        <button
          type="button"
          className={`${toolbarButtonClass} ${editor.isActive('bulletList') ? activeButtonClass : ''}`}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          aria-label="Bullet list"
        >
          <List className="size-4" />
        </button>
        <button
          type="button"
          className={toolbarButtonClass}
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          aria-label="Undo"
        >
          <Undo className="size-4" />
        </button>
        <button
          type="button"
          className={toolbarButtonClass}
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          aria-label="Redo"
        >
          <Redo className="size-4" />
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="min-h-56 px-4 py-3 text-lg [&_.ProseMirror]:min-h-48 [&_.ProseMirror]:outline-none [&_.ProseMirror_blockquote]:border-l-4 [&_.ProseMirror_blockquote]:border-zinc-300 [&_.ProseMirror_blockquote]:pl-4 [&_.ProseMirror_h1]:text-3xl [&_.ProseMirror_h1]:font-bold [&_.ProseMirror_h2]:text-2xl [&_.ProseMirror_h2]:font-bold [&_.ProseMirror_h3]:text-xl [&_.ProseMirror_h3]:font-semibold [&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-6 [&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-6"
      />
    </div>
  )
}

export default Tiptap
