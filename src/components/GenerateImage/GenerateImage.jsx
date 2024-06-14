import React from 'react'
import search from '../assets/svg/search.svg'

function GenerateImage() {
    return (
        <>
        <div className="bg-dark my-auto py-auto" style={{"height":"100vh"}}>
            <div className=" text-white text-center m-auto" style={{"padding": "28vh 0px"}}>
                <p className='fs-2'>Generate AI Images for Free!</p>
                <p className="fs-5 w-75 mx-auto py-2">Transform your ideas into stunning visuals with our cutting-edge AI technology. Create high-quality images in seconds with just a few clicks. Enjoy a seamless experience with our intuitive and easy-to-use platform.
                </p>
                <div class="input-group input-group-lg w-50 mx-auto my-2">
                    <input type="text" class="form-control" placeholder="Write your prompt to generate image...." />
                    <img src={search} class="input-group-text svg"></img>
                </div>

            </div>
            </div>
        </>
    )
}

export default GenerateImage