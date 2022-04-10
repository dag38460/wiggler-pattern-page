function selectPattern(patternID){
    // Retrieving value from select option 
    //var patternID = parseInt(selectObject.value);

    // Removing previous selection html
    resetPattern(false);

    // Creating elements that will be needed for display
    var patternOneDiv = document.createElement("div");
    var patternTwoDiv = document.createElement("div");
    patternOneDiv.id = "patternOne";
    patternTwoDiv.id = "patternTwo";
    patternOneDiv.className = "patternDiv";
    patternTwoDiv.className = "patternDiv";

    var header = document.createElement("h2");
    header.id = "patternHeader";

    var patternOneLabel = document.createElement("span");
    var patternTwoLabel = document.createElement("span");
    patternOneLabel.id = "patternOneLabel";
    patternTwoLabel.id = "patternTwoLabel";
    patternOneLabel.className = "patternLabel";
    patternTwoLabel.className = "patternLabel";

    var patternOneEasy = document.createElement("img");
    var patternOneAdv = document.createElement("img");
    var patternTwoEasy = document.createElement("img");
    var patternTwoAdv = document.createElement("img");
    patternOneEasy.id = "img1";
    patternOneAdv.id = "img2";
    patternTwoEasy.id = "img3";
    patternTwoAdv.id = "img4";

    // Setting the images and text for each pattern
    switch(patternID){
        // Far Left
        case "farLeft":
            patternOneEasy.src = "images/far_left_j_1.png";
            patternOneAdv.src = "images/far_left_j_2.png";            
            patternTwoEasy.src = "images/far_left_medal_1.png";
            patternTwoAdv.src = "images/far_left_medal_2.png"; 
            patternOneLabel.innerText = "SXSW (J)";
            patternTwoLabel.innerText = "Northeast (Medal)"; 
            header.innerText = "Far Left";                     
            break;
        // Bottom Left
        case "bottomLeft":
            patternOneEasy.src = "images/bottom_left_8_1.png";
            patternOneAdv.src = "images/bottom_left_8_2.png";            
            patternTwoEasy.src = "images/bottom_left_mushroom_1.png";
            patternTwoAdv.src = "images/bottom_left_mushroom_2.png"; 
            patternOneLabel.innerText = "Southeast (8)";
            patternTwoLabel.innerText = "Northeast (Mushroom)";   
            header.innerText = "Bottom Left";                     
            break;
        // Center
        case "center":
            patternOneEasy.src = "images/center_nose_1.png";
            patternOneAdv.src = "images/center_nose_2.png";            
            patternTwoEasy.src = "images/center_ghost.png"; 
            patternOneLabel.innerText = "West (Nose)";
            patternTwoLabel.innerText = "East (Ghost)";   
            header.innerText = "Center";                   
            break;
        // 6 by 1
        case "sixByOne":
            patternOneEasy.src = "images/6_by_1_o_1.png";
            patternOneAdv.src = "images/6_by_1_o_2.png";            
            patternTwoEasy.src = "images/6_by_1_star_1.png";
            patternTwoAdv.src = "images/6_by_1_star_2.png";  
            patternOneLabel.innerText = "NXNW (O)";
            patternTwoLabel.innerText = "Southeast (Star)";  
            header.innerText = "6 by 1";                     
            break;
        // Bottom Center
        case "bottomCenter":
            patternOneEasy.src = "images/bottom_center_5_1.png";
            patternOneAdv.src = "images/bottom_center_5_2.png";            
            patternTwoEasy.src = "images/bottom_center_plane_1.png";
            patternTwoAdv.src = "images/bottom_center_plane_2.png"; 
            patternOneLabel.innerText = "North (5)";
            patternTwoLabel.innerText = "Southeast (Plane)"; 
            header.innerText = "Bottom Center";                       
            break;
        // 3 by 1
        case "threeByOne":                       
            patternOneEasy.src = "images/3_by_1_bird_1.png";
            patternOneAdv.src = "images/3_by_1_bird_2.png"; 
            patternTwoEasy.src = "images/3_by_1_l_1.png";
            patternTwoAdv.src = "images/3_by_1_l_2.png";    
            patternOneLabel.innerText = "NXNW (Bird)";
            patternTwoLabel.innerText = "Northeast (L)";  
            header.innerText = "3 by 1";                   
            break;
        // Top Right
        case "topRight":
            patternOneEasy.src = "images/top_right_c.png";            
            patternTwoEasy.src = "images/top_right_w_1.png";
            patternTwoAdv.src = "images/top_right_w_2.png";     
            patternOneLabel.innerText = "Northeast (C)";
            patternTwoLabel.innerText = "NXNW (W)";   
            header.innerText = "Top Right";                 
            break;
        // Far Right
        case "farRight":
            patternOneEasy.src = "images/far_right_siblings.png";          
            patternTwoEasy.src = "images/far_right_snake_1.png";
            patternTwoAdv.src = "images/far_right_snake_2.png";  
            patternOneLabel.innerText = "NXNE (Siblings)";
            patternTwoLabel.innerText = "West (Snake)";  
            header.innerText = "Far Right";                     
            break;
        // 2 by 3
        case "twoByThree":
            patternOneEasy.src = "images/2_by_3_bomb.png";           
            patternTwoEasy.src = "images/2_by_3_ear.png";  
            patternOneLabel.innerText = "North (Bomb)";
            patternTwoLabel.innerText = "SXSE (Ear)";  
            header.innerText = "2 by 3";                    
            break;
        // 2 by 2
        case "twoByTwo":
            patternOneEasy.src = "images/2_by_2_hangman_1.png";
            patternOneAdv.src = "images/2_by_2_hangman_2.png";            
            patternTwoEasy.src = "images/2_by_2_spanish_1.png";
            patternTwoAdv.src = "images/2_by_2_spanish_2.png";  
            patternOneLabel.innerText = "NXNE (Hangman)";
            patternTwoLabel.innerText = "Northwest (Spanish)"; 
            header.innerText = "2 by 2";                      
            break;
        // Bottom Right
        case "bottomRight":
            patternOneEasy.src = "images/bottom_right_z_1.png";
            patternOneAdv.src = "images/bottom_right_z_2.png";            
            patternTwoEasy.src = "images/bottom_right_tetris_1.png";
            patternTwoAdv.src = "images/bottom_right_tetris_2.png"; 
            patternOneLabel.innerText = "Northeast (Z)";
            patternTwoLabel.innerText = "Northwest (Tetris)";  
            header.innerText = "Bottom Right";                      
            break;
    }

    // Adding images and label to divs
    patternOneDiv.appendChild(patternOneLabel);
    patternOneDiv.appendChild(patternOneEasy);
    patternOneDiv.appendChild(patternOneAdv);

    patternTwoDiv.appendChild(patternTwoLabel);
    patternTwoDiv.appendChild(patternTwoEasy);
    patternTwoDiv.appendChild(patternTwoAdv);

    // Adding header and two divs referenced above to higher level div
    var infoBlock = document.getElementById("imageDiv");
    infoBlock.appendChild(header);
    infoBlock.appendChild(patternOneDiv);
    infoBlock.appendChild(patternTwoDiv);
}

function resetPattern(clearSelection){    
    // Resetting selection so that all dropdown options are available
    if(clearSelection)
        document.getElementById("patternDropdown").value = 0;

    // Clearing images and labels that need to be replaced or removed
    var header = document.getElementById("patternHeader");
    if(header)
        header.outerHTML = "";
    var div1 = document.getElementById("patternOne");
    if(div1)
        div1.outerHTML = "";
    var div2 = document.getElementById("patternTwo");
    if(div2)
        div2.outerHTML = "";
}