import fetchApi from './fetchApi'

export async function getProjects() {
    return await fetchApi('projects')
}

export async function getProject(id) {
    return await fetchApi(`projects/${id}`)
}