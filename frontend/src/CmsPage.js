import { Component } from "react"

class CmsPage extends Component {
  state = { currentHeading: "", newHeading: "", successMessage: "" }

  componentDidMount() {
    fetch("http://localhost:5000")
      .then((res) => res.json())
      .then((data) => this.setState({ currentHeading: data.text }))
  }

  handleInput = (e) => this.setState({ newHeading: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: this.state.newHeading }),
    })
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          currentHeading: data.text,
          successMessage: "Successfully Changed the Heading...",
        })
      )
      .catch((err) => {
        console.log("Error in Fetching Headingss", err)
      })
  }

  render() {
    return (
      <div>
        <h1 className="bg-black text-white p-5 rounded text-center text-2xl">
          CMS Edit Heading
        </h1>
        <p className="text-center text-xl mt-2 mb-3">Current Heading</p>
        <div className="bg-blue-50 p-3 text-center text-green-500 font-bold text-xl">
          {this.state.currentHeading}
        </div>
        <form
          onSubmit={this.handleSubmit}
          className="w-full flex justify-center flex-col"
        >
          <textarea
            rows={4}
            className="border border-blue-100 block text-center"
            onChange={this.handleInput}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-400 rounded p-3 cursor-pointer"
          >
            Submit
          </button>
        </form>
        <p className="text-center text-green-500 text-xl">
          Successfully Changed the Heading...
        </p>
      </div>
    )
  }
}

export default CmsPage
