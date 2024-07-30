async function init(){
  let rustApp = null;
  try {
    // rustApp = await import('../pkg');
  } catch (error) {
    console.log("Failed to import package");
    console.log(error);
    return; 
  }
  console.log(rustApp);

  const input = document.getElementById('upload');
  const fileReader = new FileReader();

  fileReader.onloadend = () =>{
    const base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/g,'')
    
    // rustApp.grayscale(base64);
  }


  input.addEventListener('change', ()=>{
    fileReader.readAsDataURL(input.files[0]);
  })
}

init()