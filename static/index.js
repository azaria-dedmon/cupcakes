const flavor = document.getElementById('flavor')
const size = document.getElementById('size')
const rating = document.getElementById('rating')
const image = document.getElementById('image')

$( document ).ready(function() {
    getCupcakes()
});


async function getCupcakes() {
   let res = await axios.get('/api/cupcakes')

   const img = $('<img>');

   for (let cupcake of res.data.cupcakes) {
       $('#parent').append(`<li>
       {<br>
           flavor: ${cupcake.flavor},<br>
           size: ${cupcake.size},<br>
           rating: ${cupcake.rating},<br>
           image: ${`<img src="${cupcake.image}" />`}<br>
        }
       </li>`)
   }
}

async function postCupcake() {
    let res = await axios({
        method: 'post',
        url: '/api/cupcakes',
        data: {
        'flavor': flavor.value,
        'size': size.value,
        'rating': rating.value,
        'image': image.value
        },
        headers: {
        'Content-Type': 'application/json'
        }
    })
}


$("#form").submit(async function(event) {
    postCupcake()
    event.preventDefault();

    setTimeout(function() {
        window.location.reload();
   },0);
   this.submit();
  });
