let itemcontainer = document.querySelector('.item-con');
let html =``;

let arr=[];
additem();

function on()
{
    let s = document.querySelector('.bag-item');
    s = s?JSON.parse(s) :[];
    
}
function addtobag(id)
{
    arr.push(id)
    localStorage.setItem('addtobag',JSON.stringify(arr));
    count(arr);
}
function count()
{
    document.querySelector('.bag-item').innerText=arr.length;
}

function additem()
{
    items.forEach(dat =>
        {
         html += `
         <div class="item">
                    <img class="item-img" src="${dat.img}" alt="">
                    <div class="item-rating">
                        ${dat.rating.star}&#11088 | ${dat.rating.view}
                    </div>
                    <div class="company-name">${dat.company_name}</div>
                    <div class="item-name">${dat.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs ${dat.cprice}</span>
                        <span class="original-price">Rs ${dat.oprice}</span>
                        <span class="discount">( ${dat.dprice}OFF)</span>
                    </div>
                    <button class="item-btn" onclick="addtobag(${dat.id});">Add to Bag</button> 
                </div>
        `
        }
     )
          itemcontainer.innerHTML = html;
}

