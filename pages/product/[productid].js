const productDetails() => {

}

export default productDetails


export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`http://localhost:4000/${params.productid}`)
    const data = await response.json()

    return {
        props: {
            productDetails: data
        }
    }
}

export async function getStaticPaths() {
    return {
        path: [
           { params: {
                productid: 1
            }}
        ]
    }
}