import React, { useRef, useState } from 'react'
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Stack,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CreatableReactSelect from 'react-select/creatable'

type NoteFormProps = {
  onSubmit: (data: NoteDta) => void
}

export default function NoteForm({ onSubmit }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  function handleSubmit(e: FocusEvent) {
    e.preventDefault()
    onSubmit: ({
      title: titleRef.current!.value,
      markdown: markdownRef.current?.value,
      tags: [],
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <FormLabel>Title</FormLabel>
              <FormControl required ref={titleRef} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <FormLabel>Tags</FormLabel>
              <CreatableReactSelect
                isMulti
                value={selectedTags.map((tag) => {
                  return {label:tags.label,value: tag.id}
                })}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup controlId="markdown">
          <FormLabel>Body</FormLabel>
          <FormControl required as="textarea" rows={10} ref={markdownRef} />
        </FormGroup>
        <Stack direction="horizontal" gap={4} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  )
}
