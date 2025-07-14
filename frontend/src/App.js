import { Component } from "react"
import CmsPage from "./CmsPage"

import { Chrono } from "react-chrono"

import image from "./Assestes/hero-image-cur.png"

const items = [
  {
    title: "Step 1",
    cardTitle: "Multi-source data",
    cardDetailedText:
      "Our solutions work with old, new, or incomplete datasets, in different formats, and from varied sources.",
  },
  {
    title: "Step 2",
    cardTitle: "Ready to Go Algos",
    cardDetailedText:
      "We have ready accelerators embedded with learnings from hundreds of past projects, generating actionable results.",
  },
  {
    title: "Step 3",
    cardTitle: "Stakeholder alignment",
    cardDetailedText:
      "No black boxes. Stakeholders understand the “how”, “so what” and “now what”, leading to clear decision-making trade offs.",
  },
  {
    title: "Step 4",
    cardTitle: "Internal capability building",
    cardDetailedText:
      "We productize all our work, enhance them with the latest AI technology, and train your internal teams to leverage them.",
  },
  {
    title: "Step 5",
    cardTitle: "Continuous engagement",
    cardDetailedText:
      "We engage in the long-term to enhance, course-correct, and adopt new models to continuously refine your work.",
  },
]

class App extends Component {
  state = { showCMS: false, heading: "" }

  componentDidMount() {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => this.setState({ heading: data.text }))
  }

  toggleCMS = () => {
    this.setState({ showCMS: !this.state.showCMS })
  }

  render() {
    return (
      <div>
        <div className="w-full bg-amber-400 h-20 flex flex-col justify-center items-center">
          <button
            onClick={this.toggleCMS}
            className="bg-black p-3 rounded text-white cursor-pointer"
          >
            {this.state.showCMS ? "Back" : "Open CMS"}
          </button>
        </div>
        {this.state.showCMS ? (
          <CmsPage />
        ) : (
          <div className="w-full flex">
            <div className="w-3/6">
              <h1 className="font-bold text-5xl">{this.state.heading}</h1>
            </div>
            <div className="w-3/6">
              <img src={image} alt="Hero" />
            </div>
          </div>
        )}
        <div>
          <Chrono
            items={items}
            mode="HORIZONTAL_ALTERNATING"
            cardHeight={150}
            theme={{
              primary: "blue",
              secondary: "lightblue",
              cardBgColor: "#ffffff",
              cardTitle: "yellow",
              cardTitleActive: "red",
            }}
          />
        </div>
      </div>
    )
  }
}
export default App
