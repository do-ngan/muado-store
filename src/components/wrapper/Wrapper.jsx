import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class="fa-solid fa-info"></i>,
      title: "Our Brands",
      decs: " We thrive for the efficiency of the customer experience while also maintain quality.",
    },
    {
      cover: <i class="fa-solid fa-building"></i>,
      title: "Our Brands",
      decs: "We thrive for the efficiency of the customer experience while also maintain quality.",
    },
    {
      cover: <i class="fa-solid fa-info"></i>,
      title: "Our Brands",
      decs: "We thrive for the efficiency of the customer experience while also maintain quality.",
    },
    {
      cover: <i class="fa-solid fa-building"></i>,
      title: "Our Brands",
      decs: "We thrive for the efficiency of the customer experience while also maintain quality.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
