export interface Tarefa {
    id: number
    title: string
    completed: boolean
}

export interface PostTarefa {
    title: string
    completed?: boolean
}