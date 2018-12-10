import React, {Component} from 'react'

class About extends Component {
    render() {
        return (
            <div id='about'>
                <div className='page-container'>
                    <h1 className="page-title">About</h1>
                </div>
                <div className="about-container">
                    <div className="about-info">
                        <div className='about-story'>
                            <h2>Our Story:</h2>
                            <h1>Do Good. Relax.</h1>
                            <div className='text'>
                                <p>Surfers all over the world know that surfing is more than a hobby or a sport — it’s a way of life. SurfsUp.surf was conceived, lovingly planned, and finally created to unite these kindred spirits from every coast and sharing their collective knowledge with budding surfers. Spreading the pure joy of surfing is our way of improving the global quality of life, one wave at a time.</p>

                                <p>Because surfing is a mysterious and awe-inspiring feat, we set out to create a website that makes surfing accessible to regular people, empowering those who only dream about it to actually go out and try it. You don’t have to be in perfect shape, or have any prior experience, to feel the thrill of gliding across the water.</p>
                            </div>
                            <h2>Share It!</h2>
                            <a className="share-icon" class='tooltip' href="https://twitter.com/"><i class="fab fa-twitter-square fa-2x"><span class="tooltiptext">Share on Twitter</span></i></a>
                            <a className="share-icon" class='tooltip' href="https://www.instagram.com/"><i class="fab fa-instagram fa-2x" ><span class="tooltiptext">Share on Instagram</span></i></a>
                            <a className="share-icon" class='tooltip' href="https://www.facebook.com/"><i class="fab fa-facebook-square fa-2x"><span class="tooltiptext">Share on Facebook</span></i></a>
                        </div>
                        <div className='about-pics'>
                            <div className='pics-container'>
                                <div class='row'>
                                    <div class="column">
                                        <img width = "162px" height = "217px" src='https://i.pinimg.com/originals/5b/c5/c2/5bc5c2d3fe750f9b1263225c5859fb6c.jpg' alt=""/>
                                        <img width = "162px" height = "104px" src='https://www.surfer.com/wp-content/uploads/2015/08/alebielmann1-667x445.jpg' alt=""/>
                                    </div>
                                    <div class="column">
                                        <img width = "135px" height = "113px" src='https://wpblink.com/sites/default/files/styles/225x120/public/wallpaper/sports/74014/surfing-wallpapers-hd-74014-4568345.png?itok=oUNwfO2W' alt=""/>
                                        <img width = "135px" height = "208px" src='https://i.pinimg.com/originals/2f/c6/8a/2fc68af1120dae843e85a13ba1a68a90.jpg' alt=""/>
                                        <img width = "136px" height = "185px" src='https://wallpapershome.com/images/pages/pic_v/902.jpg' alt=""/>
                                        <img width = "136px" height = "136px" src='https://cdn.newsapi.com.au/image/v1/06bd344486f280217024406603e66486?width=650' alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About