// eslint-disable-next-line no-unused-vars
import { IProject } from '../types/project';

const baseUrl = 'http://localhost:3000'

export async function getAll() {
  const response = await fetch(`${baseUrl}/projects`)
  return response.json()
  }