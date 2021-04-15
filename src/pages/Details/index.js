import React from 'react'
import './detail.css'


class Details extends React.Component {
    render(){
        return (
            <section class="detail-container">
                <section class="video-container">
                    <h1>Gâtaux et yaourt et Nottela </h1>
                    <video controls width="400">
                        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
                        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
                    </video>
                </section>
                <div class="img-container">
                    <img src="https://cdn.discordapp.com/attachments/831156100106682378/831172196834476062/foodie-sm.jpg" alt="foodie image" />
                </div>
                <div class="description">
                    <h3>truc</h3>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, ad deserunt. Eos ipsum vel, excepturi nulla, quaerat dignissimos veritatis unde facere, perspiciatis minima dolorum voluptate iure aspernatur optio. Maiores nulla atque ullam hic necessitatibus ipsa. Et id maiores eos dolorem excepturi officia quaerat, rem vel dolores, voluptatum distinctio harum assumenda fugiat. Adipisci, itaque ab beatae vero eligendi praesentium earum? Necessitatibus dolorum pariatur quo placeat aut ratione eligendi voluptates, ducimus repellendus odio quasi assumenda consectetur maxime ullam laborum quod cumque quia at inventore vitae unde tempore deserunt eaque nemo. Facilis voluptate maiores, eveniet impedit adipisci vero veritatis tenetur tempora doloremque aliquid nobis vel ex eaque dolorum numquam aliquam suscipit architecto temporibus consequuntur sint. Eius fugit necessitatibus accusamus, vitae iure quae dolorem. Necessitatibus hic magnam neque officiis est amet nemo accusantium inventore dolor omnis! Eius incidunt facilis inventore perferendis voluptas sequi exercitationem nobis qui dolorem est, dignissimos obcaecati, magni suscipit necessitatibus repellendus.</p>
                </div>
            </section>

        )
    }
}

export default Details