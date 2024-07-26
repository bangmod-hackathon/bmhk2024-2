export function truncateFilename(filename: string, maxLength: number = 16): string {
  // Split the filename into name and extension
  const dotIndex = filename.lastIndexOf('.')
  if (dotIndex === -1) {
    // If there's no extension, simply truncate the name
    return filename.slice(0, maxLength)
  }

  const name = filename.slice(0, dotIndex)
  const extension = filename.slice(dotIndex)

  // Truncate the name if necessary and concatenate with the extension
  const truncatedName = name.length > maxLength ? name.slice(0, maxLength) : name

  return truncatedName + extension
}
