import { useState } from 'react'
import './App.css'
import Header from './Header'
import Form from './Form'
import ProjectsView from './ProjectsView'

function App() {

  const [projects, setProjects] = useState([
    {id:"1",title:"Escrow App", description:"A solution to bridge payment trust gap between developers and clients",image:"https://c8.alamy.com/comp/2FK64WC/escrow-text-on-red-orange-ribbon-badge-stamp-2FK64WC.jpg" }, 
    {id:"2",title:"CribHunt App", description:"A House Listing/Hunting platform",image:"https://c8.alamy.com/comp/2FK64WC/escrow-text-on-red-orange-ribbon-badge-stamp-2FK64WC.jpg" }, 
    {id:"3",title:"Match App", description:"A dating platform",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2gxeojphlYXJG0lFjhQ5Rxe867PPb37-bVzcwfNwnrw&s=10" }
  ])

  const [formData, setFormData] = useState({
        id:"",
        title:"",
        description:"",
        image:""
    })

  function handleChange(event){
      console.log(event.target.value);
        setFormData(
            {
                ...formData, [event.target.name] : event.target.value
            }
        )
    }

  function handleSubmit(event){
    event.preventDefault()
    setProjects(
      [
        ...projects, formData
      ]
    )
  }

  function handleSearch(event) {
        const searchedItem = projects.filter((project) => {
            return project.title.toLowerCase().includes(event.target.value.toLowerCase().trim())
        })

        //Find  MORE IDEAL WAY TO DISPLAY SEARCHED ITEM SO THAT EVEN ON CHARACHTER DELETE THE OTHER ITEMS RETURN
      setProjects(searchedItem)
    }

  return (
    <>
      <Header />
      <main>
        <Form 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ProjectsView 
          projects={projects}
          handleSearch={handleSearch}
        />
      </main>
    </>
  )
}

export default App
