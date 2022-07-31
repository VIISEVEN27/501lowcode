import {Component} from "../component/component.schema"

export type OperationType = "update" | "insert" | "delete"

export class Operation {
    type: OperationType
    key: string | number
    value: string | Component
}