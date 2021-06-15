const inputFile = document.querySelector('#input-file');
const dropZone = document.querySelector('#drop-zone');

dropZone.addEventListener('click',()=>inputFile.click());


dropZone.addEventListener('dragover',(e)=>{
    e.preventDefault();
})
dropZone.addEventListener('drop',(e)=>{
    e.preventDefault();
    //En data transfer esta la info del file
    console.log(e.dataTransfer.files);

    inputFile.files=e.dataTransfer.files;
    console.log(inputFile.files);

})

inputFile.addEventListener('change',(e)=>{
    console.log(inputFile.files);
});