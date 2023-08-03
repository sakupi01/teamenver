// To parse this data:
//
//   import { Convert, Libraries } from "./file";
//
//   const libraries = Convert.toLibraries(json);

export interface Libraries {
  objects: Object[]
  total: number
  time: string
}

export interface Object {
  package: Package
  score: Score
  searchScore: number
}

export interface Package {
  name: string
  scope?: string
  version: string
  description: string
  keywords?: string[]
  date: string
  links?: Links
  author?: Author
  publisher?: Publisher
  maintainers?: Publisher[]
}

export interface Links {
  npm: string
  homepage: string
  repository: string
  bugs: string
}

export interface Publisher {
  username: string
  email: string
}

export interface Score {
  final: number
  detail: Detail
}

export interface Detail {
  quality: number
  popularity: number
  maintenance: number
}

export interface Author {
  name?: string
  email?: string
  url?: string
  username?: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toLibraries(json: string): Libraries {
    return JSON.parse(json)
  }

  public static librariesToJson(value: Libraries): string {
    return JSON.stringify(value)
  }
}
