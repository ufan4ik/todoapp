import { db } from "../firebase"


export interface ITask {
  id: string
  content: string
  completed: boolean
  date: Date
  priority: number
}


export function getTasksByProject(projectId: string) {
  return db
    .collection("projects")
    .doc(projectId)
    .collection("tasks")
    .get()
    .then(querySnapshot =>
      querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    )
}

export function getMaxOrderTasks(projectId: string) {
  return db
    .collection("projects")
    .doc(projectId)
    .collection("tasks")
    .orderBy("order", "desc")
    .limit(1)
    .get()
    .then(tasks => (tasks.docs.length > 0 ? tasks.docs[0].data().order + 1 : 1))
}

export async function addTask(projectId: string, payload: ITask) {
  const {
    completed = false,
    content = "",
    date = new Date(),
    priority = 1
  } = payload

  const order = await getMaxOrderTasks(projectId)

  const data = {
    completed,
    content,
    date,
    priority,
    order
  }

  const newTask = await db
    .collection("projects")
    .doc(projectId)
    .collection("tasks")
    .add(data)

  return { id: newTask.id, ...data }
}
