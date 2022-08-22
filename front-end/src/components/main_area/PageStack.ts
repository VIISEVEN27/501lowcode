import { defaultMaxListeners } from "events";

/* 维护page状态用的栈（可用于撤销与恢复）*/
function createStack() {
    var list: any[] = [];
    return {
        /**
         * 入栈
         * @param {*} data
         */
        push(data: any) {
            list.push(data);
        },

        /**
         * 出栈
         */
        pop() {
            return list.pop();
        },

        size() {
            return list.length;
        },

        empty() {
            return list.length === 0;
        },

        clear() {
            list = [];
        },
        //删除头结点（栈底）
        shift() {
            list.shift();
        },

        peek() {
            return list[list.length - 1];
        },

        getList() {
            return list;
        }
    }
}

  
  /** record对象 */
  export default function createRecord() {
    let undoStack = createStack();
    let rollbackStack = createStack();
    const MAX_LIMIT = 20;//最大限制点
    return {
        //获取可撤销栈栈顶的数据
        //用于展示
        getTopValueOfUndo() {
            return undoStack.peek();
        },

        getTopValueOfRollBack() {
            return rollbackStack.peek();
        },

        //添加记录
        //把数据直接添加到可撤销栈内
        //并且清空可回退栈
        addRecord(data: any) {
            //当可撤销栈的大小大于最大的限制的话
            //那么需要删除头结点
            if (undoStack.size() >= MAX_LIMIT) {
                undoStack.shift();
            }
            undoStack.push(data);
            rollbackStack.clear();
        },
        //撤销
        //检测可撤销栈是否为空，为空的话什么也不做
        //不然把可撤销栈出栈的数据添加到可回退栈内
        undoRecord() {
            if (undoStack.empty()) return;
            const data = undoStack.pop();
            rollbackStack.push(data);
        },
        //回退
        //检测可回退栈是否为空，为空的话什么也不做
        //把可回退栈出栈的数据添加到可撤销栈内
        rollbackRecord() {
            if (rollbackStack.empty()) return;
            const data = rollbackStack.pop();
            undoStack.push(data);
        },
        
        undoEmpty() {
            return undoStack.empty();
        },

        getUndoStack() {
            return undoStack.getList();
        },
        getrollbackStack() {
            return rollbackStack.getList();
        }
    }
  }
  
  