fetch('http://localhost:3000/User/getblog').then(res=>
{
    res.json().then(data=>
    {
      console.log(data)
        data.forEach(element => {
            document.getElementById('grid-list').innerHTML+=`<li>
        <div class="blog-card">

          <figure class="card-banner img-holder" style="--width: 550; --height: 660;">
            <img src=${element.img} loading="lazy" alt="Creating is a privilege but it’s also a gift" class="img-cover" width="550" height="660">
          </figure>

          <div class="card-content"> 
            <ul class="card-meta-list">  
              <li>
                <a href="#" class="card-tag">#Lifestyle</a>
              </li>

              <li>
                <a href="#" class="card-tag">#People</a>
              </li>

              <li>
                <a href="#" class="card-tag">#Review</a>
              </li>

            </ul>

            <h3 class="h4">
              <a href="#" class="card-title hover:underline">
                ${element.title}
              </a>
            </h3>

            <p class="card-text">
              ${element.description}
            </p>
          </div>
          <form action="">
          <div class="buttons">      
            <a href="/User/updatepage" class="btnn btn-success" onclick="getData('${element._id}')">Edit</a>
            <button class="btnn btn-success" onclick="delData('${element._id}')">Delete</button>
        </div>
        </form>
        </div>
      </li> `
        });
    })
})
function delData(id)
{
  fetch(`http://localhost:3000/User/dell/${id}`,
  {
      method:'delete'
  }).then(res=>{
    // location.reload()
    console.log('ahshsa')
  })
}

function getData(id)
{
  fetch(`http://localhost:3000/User/${id}`).then(res=>
  {
      res.json().then(data=>
      {
          document.getElementById('img').value=data.img;
          document.getElementById('title').value=data.title;
          document.getElementById('tags').value=data.tags;
          document.getElementById('description').value=data.description;
          document.getElementById('id').innerHTML=data._id;
      })
  })
}

function updateData()
{
    let img=document.getElementById('img').value;
    let title=document.getElementById('title').value;
    let tags=document.getElementById('tags').value;
    let description=document.getElementById('description').value;
    let id=document.getElementById('id').innerHTML
    console.log(id);
    fetch(`http://localhost:3000/User/update/${id}`,
    {
        method:'put',
        body:JSON.stringify({img,title,description,tags}),
        headers: {
    "Content-Type": "application/json",
},

    }).then(res=>
    {
        res.json().then(data=>
        {
            console.log(data);
            location.reload();
        })
    })
}