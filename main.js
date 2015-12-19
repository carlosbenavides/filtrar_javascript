    document.querySelector("#buscar").onkeyup = function(){
        TableFilter("#tabla", this.value);
    }
    
    TableFilter = function(id, value){
        var msgFail = 'No se han encontrado registros para el {valor} ingresado';
        var rows = document.querySelectorAll(id + ' tbody tr');
        var cantidad = document.getElementById("tabla").rows.length;
        
        for(var i = 0; i < rows.length; i++){
            var showRow = false;
            
            var row = rows[i];
           row.style.display = 'none';
            // row.childElementCount <- numero de columnas de cada fila            
            for(var x = 0; x < row.childElementCount; x++){
                if(row.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1){
                    showRow = true;
                    break;
                }
            }
            
            if(showRow){
                row.style.display = null;
            }
        }
        console.log(cantidad);
    }