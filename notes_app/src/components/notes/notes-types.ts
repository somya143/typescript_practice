export type Priority = "High" | "Medium" | "Low"
export type propsNotes = {
    id?:number,
    text : string,
    priority : Priority
}

export type NotesType = {
    id: string,
    text: string,
    priority : Priority
}