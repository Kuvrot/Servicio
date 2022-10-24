
document.getElementById('admin_button').onclick = function (){

  

  let xhr = new XMLHttpRequest();
  let data = document.getElementById ('login_info');
  let form = new FormData(data);
  
  xhr.open ('POST' , 'admin.php');
  xhr.onload = () => {

    if (JSON.parse(xhr.responseText) == "TRUE"){
      window.location = 'tables.html';
    }else{
      document.getElementById('incorrect').innerHTML = JSON.parse(xhr.responseText);
    }

  }

  xhr.send(form);


};