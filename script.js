//exercise 1 index.html
function ex1_mouseover(){
    document.getElementById("ex1").innerHTML="Can I help you?";
}
function ex1_mouseleave(){
    document.getElementById("ex1").innerHTML="Hello World!";
}
//exercise 2 index1.html
const colors=["blue","red","green"];
let counter=0;
function load_first(){
    document.getElementById("ex2").style.backgroundColor=colors[counter];
}
function increment_counter(){
    if(counter==0 || counter==1) ++counter;
    else counter=0;
    document.getElementById("ex2").style.backgroundColor=colors[counter];
}
//exercise 2B index2.html
const colors2 = ["red", "green", "blue", "orange", "yellow","black","purple"];
let selected_color=Math.floor(Math.random()*7);
function load_ex2b(){
    counter=0;
    document.getElementById("ex2b").style.backgroundColor=colors2[selected_color];
}
function increment_ex2b(){
    if(selected_color<=5)
        document.getElementById("ex2b").style.backgroundColor=colors2[++selected_color];
    else{
        selected_color=0;
        document.getElementById("ex2b").style.backgroundColor=colors2[selected_color];
    }
}
//exercisse 3 index3.html
function change_value(){
    selected_img=document.getElementById("select_flag").value;
    img_name="./assets/"+selected_img+".png";
    document.getElementById("flag_img").src=img_name;
}
//exercise 4 index4.html
function change_family(){
    selected_font=document.getElementById("family").value;
    document.getElementById("text").style.fontFamily=selected_font;
}
function change_size(){
    selected_size=document.getElementById("size").value;
    document.getElementById("text").style.fontSize=selected_size;
}
selected_style="normal";
function italic(){
    if(selected_style=="normal")
        selected_style="italic";
    else
        selected_style="normal";
    
    document.getElementById("text").style.fontStyle=selected_style;
}
selected_weight="normal";
function bold(){
    if(selected_weight=="normal")
        selected_weight="bold";
    else
        selected_weight="normal";
    document.getElementById("text").style.fontWeight=selected_weight;
}
selected_decoration="none";
function underline(){
    if(selected_decoration=="none")
        selected_decoration="underline";
    else
        selected_decoration="none";
    document.getElementById("text").style.textDecoration=selected_decoration;
}
//exercise 5 (input check example) index5.html
function change_pass(){
    selected_password=document.forms["form"]["password"].value;
    if(selected_password.length<6)
        document.getElementById("pass-msg").innerHTML="Too Short!";
    else
        document.getElementById("pass-msg").innerHTML="";
}
function change_repass(){
    selected_repassword=document.forms["form"]["repeat-password"].value;
    if(selected_repassword!=selected_password)
        document.getElementById("repass-msg").innerHTML="Password don`t match!";
    else
        document.getElementById("repass-msg").innerHTML="";
}
function view_submit(){
    if(selected_password==selected_repassword && selected_password.length>5)
        document.getElementById("submit").style.display="inline";
    else
    document.getElementById("submit").style.display="none";
}