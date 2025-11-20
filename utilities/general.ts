export function randomEmailGenerator() {
    return Math.random().toString(36).substring(2, 8) + "@gmail.com"
}
