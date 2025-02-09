const {generateUrl}=require('../hamper/uel')  
module.exports = (product) => {
    return {
        id: product._id,
        name: product.name,
        image: generateUrl(product.image.replaceAll('\\', '/')),
        description: product.description,
        price: product.price,
        category: product.category,
     
    }
}
module.exports.createOrder = (order) => {
    return {
        
    }
}