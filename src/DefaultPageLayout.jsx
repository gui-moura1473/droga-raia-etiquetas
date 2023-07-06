import Footer from "./componentes/Footer"
import Header from "./componentes/Header"

const DefaultPageLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>

    )
}

export default DefaultPageLayout