function show(clickedId) {
    var sho1 = hiden1.style.display;
    var sho2 = hiden2.style.display;
    var sho3 = hiden3.style.display;

    // Toggle Ed-Div #1
    if (clickedId == `show1`) {
                
        if (sho1 == `inline-block`) doHide();
        else {
            doHide();
            hiden1.style.display = "inline-block";
            svgDown1.style.transform = 'rotate(180deg)';
        }
    }

    // Toggle Ed-Div #2
    if (clickedId == `show2`) {
                
        if (sho2 == `inline-block`) doHide();
        else {
            doHide();
            hiden2.style.display = "inline-block";
            svgDown2.style.transform = 'rotate(180deg)';
        }
    }

    // Toggle Ed-Div #3
    if (clickedId == `show3`) {
                
        if (sho3 == `inline-block`) doHide();
        else {
            doHide();
            hiden3.style.display = "inline-block";
            svgDown3.style.transform = 'rotate(180deg)';
        }
    }
}

function doHide() {
    hiden1.style.display = "none";
    hiden2.style.display = "none";
    hiden3.style.display = "none";
    svgDown1.style.transform = 'rotate(0deg)';
    svgDown2.style.transform = 'rotate(0deg)';
    svgDown3.style.transform = 'rotate(0deg)';
}
