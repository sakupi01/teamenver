export const timeConverter = (timestampz: string) => {
  const inputTime = new Date(timestampz)
  const jstTime = new Date(inputTime.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }))

  const year = jstTime.getFullYear()
  const month = String(jstTime.getMonth() + 1).padStart(2, '0') // 月は0から始まるため+1が必要
  const day = String(jstTime.getDate()).padStart(2, '0')
  const hours = String(jstTime.getHours()).padStart(2, '0')
  const minutes = String(jstTime.getMinutes()).padStart(2, '0')
  const seconds = String(jstTime.getSeconds()).padStart(2, '0')

  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  return formattedDateTime
}
