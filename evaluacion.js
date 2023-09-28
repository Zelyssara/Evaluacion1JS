var object = [
    {User: "Juan", Password: "Perez", Age: 32},
    {User: "Jakaranda", Password: "Bermudez", Age: 17},
    {User: "Pedro", Password: "Torres", Age: 12},
    {User: "Arturo", Password: "Ochoa", Age: 42},
    {User: "Daniel", Password: "Aguilar", Age: 15},
    {User: "Raquel", Password: "Ramirez", Age: 16},
    {User: "Andrea", Password: "Romero", Age: 29},
    {User: "Ana", Password: "Banana", Age: 28},
    {User: "Eduardo", Password: "Contreras", Age: 16},
    {User: "Melina", Password: "Alcivar", Age: 23}]

    function Login(){
        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;
        for (let i = 0; i < object.length; i++){
        if(password == object[i].Password && user == object[i].User){
                if (object[i].Age >= 18){
                    window.location = "mayores.html";
                }else{
                    window.location = "menores.html";
                }
        }
    }
    }

