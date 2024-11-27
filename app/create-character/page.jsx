'use client'

import { createCharacterAction } from '../actions/chracters'

const CreateCharacter = () => {
  const handleCreateCharacter = async formData => {
    const response = await createCharacterAction(formData)
    console.log(response)
    alert('Character created successfully!')
  }

  return (
    <div>
      <h1>Create Character</h1>

      {/* Create a form for create a family guy character  using tailwind*/}
      <form action={handleCreateCharacter} className="w-1/2 mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            placeholder="Age"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Create Character
        </button>
      </form>
    </div>
  )
}

export default CreateCharacter
