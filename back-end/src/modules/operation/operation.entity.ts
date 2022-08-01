export type OperationType = "update" | "insert" | "delete"

export class Operation {
    type: OperationType
    name: string
    key: string | number
    value: string | object
    time: Date
}