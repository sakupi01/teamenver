export interface DataObject {
  [key: string]: string | null
}

/** 
 最初のnullの前のキーを抽出
 - 最初のキーがnullの場合はnullが返却される
 - nullキーがない場合は最後のキーが返される
 */
export function findKeyBeforeNullValue(obj: DataObject) {
  let prevKey = null

  for (const key in obj) {
    if (obj[key] === null) {
      return prevKey
    }
    prevKey = key
  }

  return prevKey
}
