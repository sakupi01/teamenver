'use server'
const fs = require('fs').promises // ファイルシステムモジュールを読み込む

export const appGeneratorHandler = async () => {
  'use server'
  console.log('HelloHere!')

  try {
    // ファイルを非同期的に読み込む
    // ファイルの内容を文字列として格納
    const jsCodeAsString: string = await fs.readFile('../../app/appGen.mjs', 'utf8')

    return jsCodeAsString
  } catch (err) {
    console.error(err)
    return 'Error occurred'
  }
}
