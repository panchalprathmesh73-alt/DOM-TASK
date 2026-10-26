let cl=console.log;

// let result =document.querySelector('h1')
// cl(result);
// result.style.backgroundColor ='black';
// result.style.color ='gold'



let lists =document.querySelector('.list-group-item')
lists.classList.add('bg-info')
lists.classList.add('text-white')
lists.classList.add('font-weight-bold')
cl(lists)



// let lists1=document.querySelector('.li:nth-child(3)')
// lists1.classList.add('bg-success')
// lists1.classList.add('text-red')
// lists1.classList.add('font-weight-bold')
// cl(lists1)


let imp1 = document.querySelector("#skill1 li:nth-child(3)");
cl(imp1);

let imp2 = document.querySelector("skill2 li:nth-child(3)")
cl(imp2);

const heading = document.querySelectorAll("li");
cl(heading);

let list = Array.from(document.getElementsByClassName("list-group-item"));
cl(list);

for (let i=0; i<lists.length; i++){
    list[i].classList.add('text-danger')
}



heading.forEach(ele => {
       ele.classList.add('bg-warning') ;
       ele.classList.add('text-white') ;
       ele.classList.add('font-weight-bold') ;
    }
    )

    let list01 = document.querySelector("li");
cl(list01); 


const heading01 = document.querySelectorAll("li");
cl(heading01);

heading.forEach(ele => {
    ele.style.backgroundColor = "black",
        ele.style.color = "gold";
    ele.style.padding = "10px";
    ele.style.color = "white";
    ele.style.font = "font-family-bold";
    ele.style.fontWeight  = "900";
}
)
