export type Notebook = {
  guid: string
  name: string
  updateSequenceNum: number
  defaultNotebook: boolean
  serviceCreated: number
  serviceUpdated: number
  publishing: {
    uri: string
    order: number
    ascending: boolean
    publicDescription: string
    requireLogin: boolean
    stack: string
  }
  published: boolean
  stack: string
  sharedNotebookIds: string[]
  sharedNotebooks: any[]
  businessNotebook: any
  contact: any
  restrictions: any
  recipientSettings: any
}
