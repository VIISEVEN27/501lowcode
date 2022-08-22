// import { setPage }  from '@/components/main_area/EditorContent';
import  createRecord   from '@/components/main_area/PageStack';
import {useAppStore} from "@/stores/app"

export let record = createRecord();

export function addReco(data:any) {
  record.addRecord(data)
}

/** 撤销 */
export function cancelLast() {
    console.log("cancelLast"+record.undoEmpty());
    if(record.undoEmpty())
      return ;
    // setPage( record.getTopValueOfUndo()) ;
    const appStore = useAppStore()
    appStore.page = record.getTopValueOfUndo()
    record.undoRecord();
}
  
  /** 恢复 */
export function restoreLast() {
    console.log("restorelLast")
}