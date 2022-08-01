import {Component} from "../page/page.entity"

export type OperationType = "update" | "insert" | "delete"

export interface Operation {
    type: OperationType
    key: string
    value: string | Component | Record<string, string>
    time: Date
}