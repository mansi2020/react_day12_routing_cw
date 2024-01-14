import React, { useEffect } from 'react'
import "./reviews.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
    useEffect(()=>{
      Aos.init({duration:500});
    },[]);
  return (
    <div className="reviewMain">
      <div className="reviewContainer">
        {/* card 1 */}
        <div className="reviewCard" data-aos="flip-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim
            ad inventore laudantium est illum voluptatem quis.
          </p>
          <div className="reviewProfile">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className="reviewProfileContent">
              <p>Gladis Lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="reviewCard" data-aos="flip-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam
            corrupti blanditiis dolorum.
          </p>
          <div className="reviewProfile">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className="reviewProfileContent">
              <p>Gladis Lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="reviewCard" data-aos="flip-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus.
          </p>
          <div className="reviewProfile">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className="reviewProfileContent">
              <p>Gladis Lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        {/* card 4 */}
        <div className="reviewCard" data-aos="flip-right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            minima dicta amet, molestiae aliquam incidunt suscipit recusandae
            labore ratione doloremque, architecto et illo minus quo tenetur
            ducimus.
          </p>
          <div className="reviewProfile">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className="reviewProfileContent">
              <p>Gladis Lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        {/* card 5 */}
        <div className="reviewCard" data-aos="flip-right">
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!
          </p>
          <div className="reviewProfile">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className="reviewProfileContent">
              <p>Gladis Lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>

        {/* card 6 */}
        <div className="reviewCard" data-aos="flip-right">
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.
          </p>
          <div className="reviewProfile">
            <img
              src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"
              alt=""
            />
            <div className="reviewProfileContent">
              <p>Gladis Lennon</p>
              <p>Head of SEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
