// eslint-disable-next-line no-unused-vars
import { IProject } from '../types/project';

const baseUrl = 'http://localhost:3000'

export async function getAll() {
  const response = await fetch(`${baseUrl}/projecten`)
  console.log(response)
  return response.json()
  }

export async function add(project: IProject) {
  const response = await fetch(`${baseUrl}/projecten`, {
    body: JSON.stringify(project),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST' });
    return response.json();
  }