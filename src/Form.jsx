export default function Form({formData, handleChange, handleSubmit}){

    return (
        <section className="form-container">
            <h2>Add Project</h2>
            <form className="add-project-form" onSubmit={handleSubmit}>

                <label>
                    Title
                    <input 
                        className="form-input" 
                        type="text" 
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Id
                    <input 
                        className="form-input" 
                        type="text" 
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Description
                    <input 
                        className="form-input" 
                        type="text" 
                        name="description"
                        value={formData.description} 
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Image url
                    <input 
                        className="form-input" 
                        type="text" 
                        name="image"
                        value={formData.image} 
                        onChange={handleChange}
                        />
                </label>

                <button className="add-btn" type="submit">Add</button>
            </form>
        </section>
    )
}