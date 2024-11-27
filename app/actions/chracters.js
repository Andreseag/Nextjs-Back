'use server'
// send form data to the server
export const createCharacterAction = async event => {
  const formData = event
  const title = formData.get('name')
  const body = formData.get('age')

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  if (response.ok) {
    return 'Character created successfully!'
  } else {
    return 'Failed to create character!'
  }
}
