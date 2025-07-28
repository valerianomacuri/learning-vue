interface Menu {
  name: string
  path?: string
  children?: Menu[]
}

export const menu: Menu[] = [
  {
    name: 'Estado',
    path: 'state',
    children: [
      {
        name: 'ref',
        path: '#ref',
      },
      {
        name: 'reactive',
        path: '#reactive',
      },
    ],
  },
  { name: '' },
]
