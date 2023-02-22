import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { NewNote } from './NewNote'

export type Note = {
  id: string & NoteData
}
export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}
export type Tag = {
  id: string
  label: string
}

function App() {
  return (
    <div className="App">
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/new" element={<NewNote />} />
          <Route path="/:id">
            <Route index element={<h1>show</h1>} />
            <Route path="edit" element={<h1>edit</h1>} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
