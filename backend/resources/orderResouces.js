const {generateUrl} = require('../utils/generateUrl');
module.exports = (order) => {
    return {
        id: product._id,
        name: product.name,
        image: generateUrl(product.image.replaceAll('\\', '/')),
        description: product.description,
        price: product.price,
        category: product.category,
     
    }
}