
export default {  
    name : "product", 
    type : "document", 
    title : "Product", 
    fields : [ 
        { 
            name : "name" , 
            type : "string" , 
            title : "Name of product"
        }, 
        {
            name : "images" , 
            type : "array", 
            title : "Product Images", 
            of : [{type : "image"}]
        }, 
        { 
            name : "description", 
            type : "text" , 
            title  :"Description of product"
        }, 
        { 
             name : "slug" , 
             type : "slug", 
             title : "Product Slug", 
             options : { 
                source : "name"
             }
        }, 
        { 
            name : "price", 
            title : "Price" , 
            type : "number"
        }, 
        {
            name : "category", 
            title : "Product Category", 
            type : "reference", 
            to : [{ 
                type : "category"
            }]
        }, 
        {
            name  : "price_id", 
            title : "Stripe Price Id",
            type : "string",

        }
    ]
}

