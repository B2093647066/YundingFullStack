let menu1 = document.getElementsByClassName('menu1')
for (let i = 0; i < menu1.length; i++) {
    menu1[i].onclick = function () {
        if (menu1[i].style.height == "150px") {
            menu1[i].style.height = "60px"
        }
        else { 
            menu1[i].style.height = "150px"
            for (let j = 0; j < menu1.length; j++) {
                if (i === j) {
                    continue
                }
                menu1[j].style.height = "60px"
            }
        }
    }
}