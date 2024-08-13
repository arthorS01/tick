import * as menu from "./menu.js" ;
import { setFormDate,saveTask,addActivityRow } from "./lib.js";


window.addEventListener("DOMContentLoaded",_=>{
    //add click event to menu button
    document.getElementById("menu-btn").addEventListener("click",_=>{
        menu.toggleMenu();
    })
    //add click event for hidding the menu the the nav body
    document.querySelector("nav").addEventListener("click",(e)=>{
        //if the target of the click event is not the menu bar itself
        if(!(e.currentTarget.id == "nav")){
            //hide navigation
            menu.toggleMenu();
        }
    },false);

    //add click event to drop button
    document.querySelector("#drop-activity-btn").addEventListener("click",_=>{
        menu.toggleDropActivity();  
    });

    //add click event to priority button
    document.querySelector("#priority-select-btn").addEventListener("click",_=>{
        menu.togglePriorityMenu();  
    });

    //add click event to category button
    document.querySelector("#category-select-btn").addEventListener("click",_=>{
        menu.toggleCategoryMenu();  
    });

    setFormDate();

    document.querySelector("#form-area").addEventListener("click",e=>{
        menu.toggleFormArea(e);  
    });

    //add click event to add task button
    document.querySelector("#add-task-btn").addEventListener("click",e=>{
        menu.toggleFormArea(e);  
    });

    //add click event for save task button
    document.querySelector("#save-task-btn").addEventListener("click",e=>{
        let rowHTML = null;

        if(rowHTML =  saveTask()){
            addActivityRow(rowHTML);
        } 
    });

    //add priority selection function for each button
    let priority_btns =  document.querySelectorAll(".priority");
    
    priority_btns.forEach(function(btn){
        btn.addEventListener("click",e=>{
            let level = e.target.getAttribute("data_level");
           document.querySelector("#priority-level").value= level;
           if(Number(level) > 1){
                //change btn color
                document.querySelector("#priority-select-btn i").style.color = getColorLevelMap(level);

                //close area
                menu.togglePriorityMenu();
           }
           
        })
    });


});

export function getColorLevelMap(number){
    switch (number) {
        case "4":
            return "red"
            break;
        case "3":
            return "orange";
            break;
        case "2":
            return "blue";
            break;
        default:
            return "black";
            break;
    }
}