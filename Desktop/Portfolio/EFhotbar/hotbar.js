var flip=0;
var weeklyMenu={
  menuByDayofWeek :"The Hot Bar changes daily",
  menuName    :"This is what is being served at the Hot Bar today",
  menuItems   :{
   menuByDay    :[
   {dayId:1, name:"Sunday", dayMenu:"Meatloaf, Mashed Potatoes, Creamed Corn, Green Beans"},
   {dayId:2, name:"Monday", dayMenu:"Grilled Chicken, Mac and Cheese, Scalloped Potatoes, Creamed Spinach"},
   {dayId:3, name:"Tuesday", dayMenu:"Teryiaki Skewers, Brown Rice, Steamed Broccoli, Mixed Veggies"},
   {dayId:4, name:"Wednesday", dayMenu:"Buffalo Chicken Wings, Mac and Cheese, Sourdough Rolls"},
   {dayId:5, name:"Thursday", dayMenu:"Four Cheese Tortollini, Garlic Bread, Green Beans, Creamed Spinach"},
   {dayId:6, name:"Friday", dayMenu:"Turkey Meatballs, Steamed Veggies, Corn Bread, Mashed Potatoes"},
   {dayId:7, name:"Saturday", dayMenu:"Blackened Chicken Breast, Mac and Cheese, Steamed Coliflower, Sourdough Rolls"}
   ]
  }
};


$(document).ready(function(){

   $("#sunButton").click(function(){
    if($(".menuList").text() == " " ){
      $(".menuList").text(weeklyMenu.menuItems.menuByDay[0].dayMenu);
    }else
    {
      $(".menuList").text(" ");
    }
    });
  
    $("#monButton").click(function(){
      if($(".menuList").text() ==" "){
      $(".menuList").text(weeklyMenu.menuItems.menuByDay[1].dayMenu);
    }else
    {
      $(".menuList").text(" ");
    }
    });
  
    $("#tuesButton").click(function(){
       if($(".menuList").text() ==" "){
      $(".menuList").text(weeklyMenu.menuItems.menuByDay[2].dayMenu);
         }else
    {
      $(".menuList").text(" ");
    }
    });
  
    $("#wedButton").click(function(){
       if($(".menuList").text() ==" "){
      $(".menuList").text(weeklyMenu.menuItems.menuByDay[3].dayMenu);
         }else
    {
      $(".menuList").text(" ");
    }
    });
  
    $("#thursButton").click(function(){
       if($(".menuList").text() ==" "){
      $(".menuList").text(weeklyMenu.menuItems.menuByDay[4].dayMenu);
         }else
    {
      $(".menuList").text(" ");
    }
    });
  
    $("#friButton").click(function(){
       if($(".menuList").text() ==" "){
      $(".menuList").text(weeklyMenu.menuItems.menuByDay[5].dayMenu);
         }else
    {
      $(".menuList").text(" ");
    }
    });
  
    $("#satButton").click(function(){
       if($(".menuList").text() ==" "){
      $(".menuList").text(weeklyMenu.menuItems.menuByDay[6].dayMenu);
         }else
    {
      $(".menuList").text(" ");
    }
    });
  
});
