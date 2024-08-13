export function toggleMenu(){
    //if menu class is present
        //add the display class to the nav container
       
    //else 
        //remove display class
    document.querySelector("nav").classList.toggle("show");
}

export function toggleDropActivity(){
   
    document.querySelector(".activity-row-container").classList.toggle("show-activity-row");
}

export function togglePriorityMenu(){

    let category_container =  document.querySelector("#category-list-container");
    if(category_container.classList.contains("show-list")){
        category_container.classList.remove("show-list");
    }
        document.querySelector("#priority-list-container").classList.toggle("show-list");
}

export function toggleCategoryMenu(){
    
    let priority_container =  document.querySelector("#priority-list-container");
        if(priority_container.classList.contains("show-list")){
            priority_container.classList.remove("show-list");
        }
    document.querySelector("#category-list-container").classList.toggle("show-list");
}

export function toggleFormArea(e){
   
    if(e.currentTarget.id=="add-task-btn"){
        document.querySelector("#form-area").classList.add("translateBottom");
   }
   if(e.target.id=="form-area-close-btn"){
        document.querySelector("#form-area").classList.remove("translateBottom");
   }
    
 
    
}