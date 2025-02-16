let ourForm = document.getElementById('form-file');
ourForm.addEventListener('submit', (event) => {
    e.preventDefault(); // Нужно для остановки какого-либо действия 

    const formData = new FormData(event.target); // Данные формы(НЕ объект!)
    
    const file = formData.get('picture');

    const reader = new FileReader();
    reader.addEventListener('load', (e) => {
        document.getElementById("photo-preview").src = reader.result;
    })

    reader.readAsDataURL(file);
})
