import React from 'react'
import './Storyreel.css'
import Story from "./Story"
function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="./nezuko.png"
                profileSrc="./Facebook-logo.png"
                title="Nezuko chwannn"
            />
            <Story
                image="./02.png"
                profileSrc="./Facebook-logo.png"
                title="Zero Two"
            />
            <Story
                image="./ab.jpg"
                profileSrc="./Facebook-logo.png"
                title="Shrwaneeeee"
            />
            <Story
                image="./kaka.jpg"
                profileSrc="./Facebook-logo.png"
                title="Kakashi Sensei"
            />
            <Story
                image="./teaser.png"
                profileSrc="./Facebook-logo.png"
                title="Takagi San"
            />
            <Story
                image="./zabu.jpg"
                profileSrc="./Facebook-logo.png"
                title="Haku"
            />
        </div>
    )
}

export default StoryReel
