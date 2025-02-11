const list = document.querySelector('ul')
const buttonshowall = document.querySelector('.show-all')
const buttonmapall = document.querySelector('.map-all')
const buttonsumAll= document.querySelector('.sumAll')
const buttonfilterall = document.querySelector('.filter-all')

function showall(productArrey) {

let myli = ''

    productArrey.forEach(product => {
        myli +=
            ` <li>
                 <img src=${product.src}>
                 <p>${product.name}</p>
                 <p class="intem-price">R$ ${product.price}</p>
     
             </li>            
             `

    })

    list.innerHTML = myli

}

function mapall(){
    const nwePrice = menuOptions.map((product)=>({ 

        ...product,
        price: product.price * 0.9
    }))

    showall(nwePrice)
};

function sumAllIntens(){

    const totalValeu = menuOptions.reduce((acc, curr)=> acc + curr.price, 0)

    list.innerHTML = 
    `
    <li>

    <h4 color:red >O valor total do itens é R$ ${totalValeu} </h4> 
    
    </li>


    `
};

function filterall(){
    const filterjustvegan = menuOptions.filter((product)=> product.vegan)
showall(filterjustvegan)

}


buttonshowall.addEventListener('click', () => showall (menuOptions))
buttonmapall.addEventListener('click', mapall)
buttonsumAll.addEventListener('click', sumAllIntens)
buttonfilterall.addEventListener('click', filterall )



