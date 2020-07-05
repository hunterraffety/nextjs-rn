import { useState, useEffect } from 'react'

const CreateMovieForm = props => {
  const { initialData, submitButton } = props

  const defaultData = {
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    longDesc: '',
  }

  const formData = initialData ? { ...initialData } : defaultData

  const [form, setForm] = useState(formData)

  const handleChange = e => {
    const target = e.target
    const name = target.name
    setForm({
      ...form,
      [name]: target.value,
    })
  }

  const handleGenreChange = e => {
    const { options } = e.target
    const optionsLength = options.length
    let value = []
    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }

    setForm({
      ...form,
      genre: value.toString(),
    })
  }

  const submitForm = () => {
    props.handleFormSubmit({ ...form })
  }

  return (
    <form>
      {JSON.stringify(initialData)}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handleChange}
          value={form.name}
          name="name"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Lord of the Rings"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          onChange={handleChange}
          name="description"
          className="form-control"
          value={form.description}
          id="description"
          placeholder="Somewhere in Middle-earth..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input
          value={form.rating}
          onChange={handleChange}
          type="number"
          name="rating"
          max="5"
          min="0"
          className="form-control"
          id="rating"
          placeholder="3"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          onChange={handleChange}
          name="image"
          value={form.image}
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input
          type="text"
          name="cover"
          onChange={handleChange}
          value={form.cover}
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="longDesc">Long Description</label>
        <textarea
          className="form-control"
          id="longDesc"
          rows="3"
          onChange={handleChange}
          name="longDesc"
          value={form.longDesc}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select
          multiple
          className="form-control"
          id="genre"
          name="genre"
          onChange={handleGenreChange}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
      </div>
      <button type="button" onClick={submitForm}>
        {submitButton || 'Create'}
      </button>
    </form>
  )
}

export default CreateMovieForm
