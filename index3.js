const arr = [
    {
      id: '1',
      name: 'John'
    },
    {
      id: '2',
      name: 'John Doe'
    },
    {
      id: '3',
      name: 'User 1'
    },
    {
      id: '4',
      name: 'User 2'
    },
    {
      id: '2',
      name: 'User 3'
    },
  ]
  const arr2 = [...arr]
  const index =  arr2.findIndex( e => e.id === '2' )
  arr2[index] = {
    ...arr2[index],
    name: "new name"
  }

  

  console.log("%c 🎨: arr ", "font-size:16px;background-color:#4af2f5;color:black;", arr)
  console.log("%c 🎨🎨: arr2 ", "font-size:16px;background-color:#4af2f5;color:black;", arr2)

 