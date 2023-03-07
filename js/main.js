var imageUploadBtn = document.querySelector('#upload-photo')
var hiddenUploadBtn = document.querySelector('#hidden-upload-btn')

// hiddenUploadBtn.dispatchEvent(new Event("click"))

imageUploadBtn.addEventListener('click', function(event){
    hiddenUploadBtn.click()
})