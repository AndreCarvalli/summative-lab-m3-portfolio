import Card from "./Card";

export default function ProjectsView({projects, handleSearch}){


    return (
        <section className="projects-view">
            <section className="search-header">
                <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Search Projects" 
                    onChange={handleSearch}
                />
            </section>
            <section className="projects-container">
               {
                projects.map((project)=>
                 <Card
                    key={project.id}
                    image = {project.image}
                    title = {project.title}
                    description={project.description}
                />
                )
               }
            </section>
        </section>
    )
}