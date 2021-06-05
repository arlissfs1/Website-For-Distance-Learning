
		function validar()
        {
                    var usuario = document.getElementById("usuario").value;
                    var Contraseña = document.getElementById("pass").value;	
        
                    if(usuario == "FabiUMB" && Contraseña == "301299" || usuario == "YotUMB" && Contraseña == "12345"
                   || usuario == "AlexUMB" && Contraseña == "210599"||usuario == "XimenaUMB" && Contraseña == "1234"||
                   usuario == "PaoUMB" && Contraseña == "4567")
                    {
                        alert("Usuario y Contraseña validos");

                     window.location.href = "Website For Distance Learning.html";

                     
                    }else if(usuario == "RobertoUMB" && Contraseña == "7891"|| usuario == "BenkisUMB" && Contraseña == "1011"||
                    usuario == "KarenUMB" && Contraseña == "1010"|| usuario == "AndresUMB" && Contraseña == "117"
                    || usuario == "LuisUMB" && Contraseña == "1112")
                    
                    {
                        alert("Usuario y Contraseña validos");
                        window.location.href = "Website For Distance Learning.html";

                    }else
                    {
                                 
                        alert("Verifique sus credenciales");
                    }
                                
                }
        

	
