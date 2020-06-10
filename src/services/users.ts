const baseUrl = 'http://localhost:3000'

export async function getAll() {
  const response = await fetch(`${baseUrl}/users`)
  return response.json()
  }