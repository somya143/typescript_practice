export type Priority = "High" | "Medium" | "Low"
 

export type NotesType = {
    id: string,
    text: string,
    priority : Priority
}

export enum Color{
High = "rgb(255, 0, 0)",
Medium = "rgb(0, 128, 0)",
Low = "rgb(0, 0, 255)"
}

