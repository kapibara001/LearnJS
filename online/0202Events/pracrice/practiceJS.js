function addBtnClick() {
    const nowTime = new Date();
    const ulList = document.getElementById("timeList");
    const create_li = document.createElement("li");
    create_li.className = "listElement";

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Удалить";
    deleteBtn.className = "deleteBtn"
    deleteBtn.onclick = () => { 
        ulList.removeChild(create_li);
    }

    create_li.innerText = `Клик в ${nowTime.toLocaleTimeString()}`;
    create_li.appendChild(deleteBtn);
    ulList.appendChild(create_li);

    
}

const addBtn = document.getElementById("addTime");

addBtn.addEventListener('click', addBtnClick);