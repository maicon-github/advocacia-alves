export default function (doc) {
  if (doc.type === 'blog') {
    return `/blog/${doc.uid}`
  }
  return `/${doc.uid}`
}
