// import axios from "axios";
const baseURL = 'https://x2rq8qbt0d.execute-api.us-east-1.amazonaws.com/dev/'
const config =  {
    headers: {
        Authorization: "SK-DEV-00001-UNIVACITI-9999999999-1558D1554781C926F2D9A330B020CA86ABA0F241DB7BAD26F88305F3F48D590A66CC73CE6AD2219A005E7640DDE662BA",
        // 'Access-Control-Allow-Origin' : '*',
        // 'Access-Control-Allow-Methods':'POST',
    }
}

// const billCategory = document.querySelector("#bill-categories")

// //          API Calls             //

// // category list

// async function fetchCategory() {
//     let data = {request: "categoryList"}
//     let rawData = JSON.stringify(data)
//     try {
//         const response = await axios.post(baseURL+'getCategoryList', rawData, config)
//         const categoryList = response.data.result
//         appendCategoryCard(categoryList)

//     } catch(err) {
//         console.log(err)
//     }
// }

// function categoryCard(category) {
//     const card = document.createElement('li')
//     card.dataset.categoryId = category.categoryId
//     card.classList.add("category-card")
//     card.innerText = `${category.categoryName}`
//     card.onclick = (e) => {
//         const cId = e.target.dataset.categoryId
//         fetchBillers(cId)
//     }
//     return card
// }

// function appendCategoryCard(categories) {

//     categories.map(category => {
//         billCategory.appendChild(categoryCard(category))
//     })
// }

// billing list

async function fetchBillers(cId = "epin") {
    let data = {categoryId: cId}
    let rawData = JSON.stringify(data)
    console.log(rawData)
    try {
        const response = await axios.post(baseURL+'getBillerCategoryList', rawData, config)
        const billingList = response.data.result
        console.log(billingList)
        // billingListActivityScreen(billingList)

    } catch(err) {
        console.log(err)
    }
}

fetchBillers()

// Activity Screen //

function handleActivityScreen(newScreen) {

}

function billingListActivityScreen(list) {

}

function productListActivityScreen(list) {

}

function validateCustomerActivityScreen() {

}

function makePaymentActivityScreen() {

}

// End ActivityScreen Components //

// Initial Call //

// fetchCategory()


