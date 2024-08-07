import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { nanoid } from 'nanoid'
import { storage } from './firebase'

export const UploadFile = async (folder: string, file: File): Promise<string> => {
  const filearr = file.name.split('.')
  const ext = filearr[filearr.length - 1]
  const filename = filearr
    .slice(0, filearr.length - 1)
    .join('_')
    .replace(/\s/g, '_')
  const newFileName = filename + '_' + nanoid(8) + '.' + ext

  const storageRef = ref(storage, `${folder}/${newFileName}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)

  return url
}
