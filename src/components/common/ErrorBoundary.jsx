import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AlertCircle, RotateCcw } from 'lucide-react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('TeddyPups caught an error:', error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FFFDF8] px-4 py-16">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#2A170E]/10 shadow-xl text-center">
            <div className="w-14 h-14 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2A170E] mb-2">
              Something went wrong
            </h2>
            <p className="text-sm text-[#5A3A28] mb-6 leading-relaxed">
              An unexpected display issue occurred. Please reload the page to continue exploring our puppies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C2622B] text-white text-sm font-semibold hover:bg-[#A85221] transition shadow"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-3 rounded-full border border-[#2A170E]/20 text-[#2A170E] text-sm font-medium hover:bg-[#FBE9CC]/40 transition"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
