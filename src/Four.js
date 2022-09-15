import React from 'react'

export default function Four() {
  return (
   <>
   <div className="four">
   <div className="testimonial">
    <h1>Testimonial</h1>
   </div>
  
 <div className="slide">
 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
 <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis sapiente omnis deleniti?
   Nostrum maiores quibusdam unde, commodi sequi adipisci voluptatem obcaecati doloremque accusantium.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis praesentium velit.</p>
   <div className="roundImage">
 <img src={require("E:\\Fitness\\gym\\src\\Assets\\katherine.jpg")} alt="Not Found" />
 </div>
 <h2>Katherine Robinson</h2>
 <h6>Our client</h6>
    </div>
    <div class="carousel-item">
    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis sapiente omnis deleniti?
   Nostrum maiores quibusdam unde, commodi sequi adipisci voluptatem obcaecati doloremque accusantium.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis praesentium velit.</p>
   <div className="roundImage">
   <img src={require("E:\\Fitness\\gym\\src\\Assets\\skye.jpg")} alt="Not Found" />
 </div>
 <h2>Skye sorenson</h2>
 <h6>Our client</h6>
    </div>
    <div class="carousel-item">
    <p className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore facilis sapiente omnis deleniti?
   Nostrum maiores quibusdam unde, commodi sequi adipisci voluptatem obcaecati doloremque accusantium.
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis praesentium velit.</p>
   <div className="roundImage">
   <img src={require("E:\\Fitness\\gym\\src\\Assets\\higgins.jpg")} alt="Not Found" />
 </div>
 <h2>Higgins Emma</h2>
 <h6>Our client</h6>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
 </div>
 </div>
 <div className="news">
<h1>Recent News</h1>
<div className="newsPhotos"></div>
</div>
   </>
  )
}
