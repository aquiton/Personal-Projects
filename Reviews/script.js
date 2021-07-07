const previous = document.getElementById("previous");
const next = document.getElementById("next");
const random = document.getElementById("random");
var node = 0;
var img = "";
var job = "";
var text = "";
var person = "";
var id;
const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Anna Johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Peter Jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Bill Anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

previous.addEventListener("click",function(){
  node = node - 1;
  if(node < 0){
    node = 3;
  }
  updateScreen(node);
})

next.addEventListener("click",function(){
  node = node + 1;
  if(node == 4){
    node = 0;
  }
 
  updateScreen(node);

})

random.addEventListener("click",function(){
  var temp_node = node;
  while(node == temp_node){
  temp_node = Math.floor(Math.random() * 4);
  }
  node = temp_node;
  updateScreen(node);
  
})

function updateScreen(node){
  id = reviews[node].id;
  img = reviews[node].img;
  job = reviews[node].job;
  text = reviews[node].text;
  person = reviews[node].name;
  document.getElementById("person-img").style.backgroundImage = "url("+img+")";
  document.getElementById("name").innerHTML = person;
  document.getElementById("description").innerHTML = text;
  document.getElementById("profession").innerHTML = job;
  if(id == 2 || id == 4){
    document.getElementById("person-img").style.backgroundSize = "155%";
  }else{
    document.getElementById("person-img").style.backgroundSize = "100%";
  }
}






