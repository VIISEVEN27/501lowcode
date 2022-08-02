export type OperationType = "update" | "insert" | "delete"

export interface Operation {
    type: OperationType
    key: string
    value: string | object
    time: Date
}