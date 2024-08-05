import { Component } from "@angular/core";
const data=[
    {name:"Ahmed"},
    {name:"Sallam"},
    {name:"Sherif"},
   ]
   const random=Math.floor(Math.random()*data.length)

@Component({
    selector:"Header-root",
    standalone:true,
    templateUrl:'./Header.component.html'
})





export class HeaderComponent{
    SelectUser=data[random]
    onClick(){
        const random=Math.floor(Math.random()*data.length)
        this.SelectUser=data[random]

        console.log("Hello");
        
      }
}