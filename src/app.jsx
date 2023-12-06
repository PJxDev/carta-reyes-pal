import Header from "./components/header/index.jsx"
import Introduction from "./components/introduction/index.jsx"
import ArticlesCards from "./components/articlesCards/index.jsx"
import Footer from "./components/footer/index.jsx"

export function App() {
  return (
    <div className="bg-orange-200">
      <Header />
      <Introduction />
      <ArticlesCards />
      <Footer />
    </div>
  )
}
