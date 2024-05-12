import './styles/App.css'
import testimonials from './data/testimonials.json'
import Testimonial from './components/Testimonial'

interface Testimonial {
    name: string
    quote: string
    text: string
    avatarURL: string
}

function App() {
    return (
        <section className="testimonials">
            {
                testimonials.map((testimonial: Testimonial, index) => {
                    const { name, quote, text, avatarURL } = testimonial
                    return (
                    <Testimonial
                        key={name}
                        index={index}
                        name={name}
                        quote={quote}
                        text={text}
                        avatarURL={avatarURL}
                    />
                )})
            }
        </section>
    )
}

export default App
