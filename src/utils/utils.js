export function UUID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}
export function seates() {
  return Array.from({ length: 10 * 10 }, (_, i) => i + 1)
}
