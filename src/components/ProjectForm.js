import React from "react"

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress
} from "@material-ui/core"

import { addProject } from "../api/projects"

export default function ProjectForm(props) {
  const { open, onClose, onProjectAdded } = props

  const [name, setName] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    addProject({ name }).then(res => {
      onProjectAdded && onProjectAdded(res)
      setLoading(false)
      onClose()
    }).catch(() => {
      setLoading(false)
    })
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Создать новый проект</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField required fullWidth value={name} onChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button color="primary" type="submit">
            Создать {loading && <CircularProgress size={15}/>}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
