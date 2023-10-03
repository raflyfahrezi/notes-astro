import { atom } from 'nanostores'

type Note = {
  title: string
  description: string
}

export const notes = atom<Note[]>([])
