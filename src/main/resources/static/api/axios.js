function register(event){
    event.preventDefault();
    var name= document.getElementById('name').value;
    var username=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    console.log(password);

  

    axios.post('http://localhost:8080/signup', {
        username: `${username}`,
        password: `${password}`,
        role:"USER"
      })
      .then(function (response) {
        alert('USER REGISTERED');
        window.location.href="/botlogin";
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

};

function login(event){
	  event.preventDefault();
	  var username=document.getElementById('email').value;
	  var password=document.getElementById('password').value;
	  
	  
	  axios.post('http://localhost:8080/signin',{
	    username: `${username}`,
	    password:`${password}`
	  })
	  .then(function(response){
	    console.log(response.data);
	    alert('Login Successfull');
	    if(response.data.role=='USER')
	    	window.location.href="/chatbot";
	    else
	    	window.location.href="/admin";
	   /* if(response.data.message==='Login Successful'){
	      localStorage.setItem('name', response.data.name);
	      localStorage.setItem('email',response.data.email);
	      localStorage.setItem('token',response.data.token);
	      window.location.href="chatbot.html";
	    }*/
	  })
	  .catch(function(error){
	    console.log(error)
	  })
	}