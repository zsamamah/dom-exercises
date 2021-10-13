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
//exercise 6 index6.html
show1_clicked="none";
show2_clicked="none";
show3_clicked="none";
function show1(){
    if(show1_clicked=="none"){
        document.getElementById("msg1").style.display="block";
        show1_clicked="block";
        document.getElementById("anchor1").style.display="none";
    }
    else{
        document.getElementById("msg1").style.display="none";
        show1_clicked="none";
        document.getElementById("anchor1").style.display="inline";
    }
}
function show2(){
    if(show2_clicked=="none"){
        document.getElementById("msg2").style.display="block";
        show2_clicked="block";
        document.getElementById("anchor2").style.display="none";
    }
    else{
        document.getElementById("msg2").style.display="none";
        show2_clicked="none";
        document.getElementById("anchor2").style.display="inline";
    }
}
function show3(){
    if(show3_clicked=="none"){
        document.getElementById("msg3").style.display="block";
        show3_clicked="block";
        document.getElementById("anchor3").style.display="none";
    }
    else{
        document.getElementById("msg3").style.display="none";
        show3_clicked="none";
        document.getElementById("anchor3").style.display="inline";
    }
}
//exercise 7 index7.html
song_validator=false;
function validate(){
    if(document.getElementById("song").value!=null || " ")
        song_validator=true;
    else
        song_validator=false;
}
function submit_song(){
    selected_song=document.getElementById("song").value;
    if(song_validator){
        let my_ul=document.getElementById("list");
        let new_li=document.createElement("li");
        let new_text=document.createTextNode(selected_song);
        new_li.appendChild(new_text);
        my_ul.appendChild(new_li);
        song_validator=false;
        selected_song=null;
        document.getElementById("song").value="";
    }
}
//exercise 7B index7b.html
function submit_song_2(){
    selected_song=document.getElementById("song").value;
    if(song_validator){
        let parent=document.createElement("div");
        parent.innerHTML=selected_song;

        let parent2=document.createElement("div");
        let anchor=document.createElement("a");
        anchor.innerHTML="Delete";
        anchor.href="javascript:delete_element()";
        parent2.appendChild(anchor);

        let my_ul=document.getElementById("list2");
        let new_li=document.createElement("li");
        new_li.appendChild(parent);
        new_li.appendChild(parent2);
        my_ul.appendChild(new_li);

        selected_song=null;
        document.getElementById("song").value="";
        song_validator=false;
    }
}
function delete_element(){
    let names=document.querySelectorAll(".element");
}
//exercise 8 index8.html2
const my_array=[];
let r_range=0,g_rang=0,b_range;
function create_colors(){
    index=0;
    // let x=document.querySelectorAll(".coloring");
    let x=document.getElementById("my_colors")
    for(let i=0;i<216;i++){
        r_range=Math.floor(Math.random()*256);
        g_range=Math.floor(Math.random()*256);
        b_range=Math.floor(Math.random()*256);
        the_color="rgb("+r_range+","+g_range+","+b_range+")";
        // x[i].style.backgroundColor=the_color;
        my_array.push(the_color);

        let k=document.createElement("div");
        k.className="coloring";
        k.style.backgroundColor=the_color;
        k.addEventListener("click",function(){
            document.getElementById("picked").innerHTML=this.style.backgroundColor;
            document.getElementById("picked").style.backgroundColor=this.style.backgroundColor;
        })
        x.appendChild(k);
    }
    document.getElementById("picked").innerHTML=my_array[0];
    document.getElementById("picked").style.backgroundColor=my_array[0];
}