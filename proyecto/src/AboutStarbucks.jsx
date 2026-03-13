import "./AboutStarbucks.css"

function AboutStarbucks() {
    const starbucksData = { 
  title: "Acerca de Starbucks",

  leftPanel: {
    logo: "https://i.pinimg.com/736x/7f/4f/5e/7f4f5e9dff0f5ab9138c19d5e3f024e6.jpg",
    text: "Acerca de Starbucks"
  },

  sections: [
    {
      subtitle: "Historia de Starbucks",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
      paragraphs: [
        "Starbucks abre sus puertas en 1971 con el fin de compartir el mejor café del mundo.",
        "No solo se honra el café y su tradición, sino que también se crea una conexión."
      ]
    },

    {
      subtitle: "Más que un simple café",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvh8ryvnYfry1bgo9kJfqLxpmGcVHs3CMcA&s",
      paragraphs: [
        "El café es un producto increíblemente tradicional en Colombia, por eso en Starbucks nos enforzamos día a día en adquirir el mejor café de la mano de la responsabilidad y la ética que conlleva la producción tanto en el campo como en las manos de quien lo produce."
      ]
    }

  ]
}

  

  return (
    <section className="about-container">

  <div className="about-left">
    <img src={starbucksData.leftPanel.logo}/>
    <h2>{starbucksData.leftPanel.text}</h2>
  </div>

  <div className="sections-container">

    {starbucksData.sections.map((section, index) => (
      <div className="about-content" key={index}>

        <div className="about-image">
          <img src={section.image}/>
        </div>

        <div className="about-text">
          <h3>{section.subtitle}</h3>

          {section.paragraphs.map((p,i)=>(
            <p key={i}>{p}</p>
          ))}
        

        </div>

      </div>
    ))}
     <button className="order-button">
    Ordenar ahora
  </button>
  </div>

</section>
  )
}

export default AboutStarbucks