export type Priority = "High" | "Medium" | "Low"
 

export type NotesType = {
    id: string,
    text: string,
    priority : Priority
}

export enum ColorLight{
High = "rgb(255, 0, 0)",
Medium = "rgb(0, 128, 0)",
Low = "rgb(0, 0, 255)"
}

export enum ColorDark{
    High = "rgb(186, 4, 4)",
    Medium = "rgb(3, 91, 3)",
    Low = "rgb(4, 4, 171)"
    }
    

