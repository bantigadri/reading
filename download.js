let ran= Math.floor(Math.random()*500000);
console.log(ran);


$(document).ready(function () {  
    var form = $('.man'),  
    cache_width = form.width(),  
    a4 = [595.28, 841.89]; // for a4 size paper width and height  
 
    $('#create_pdf').on('click', function () {  
        $('body').scrollTop(0);  
        createPDF();  
    });  
    
    function createPDF() {  
        getCanvas().then(function (canvas) {  
            var  
             img = canvas.toDataURL("image/png"),  
             doc = new jsPDF({  
                 unit: 'px',  
                 format: 'a4'  
             });  
            doc.addImage(img, 'JPEG', 20, 20);  
            doc.save(`application${ran}.pdf`);  
            form.width(cache_width);  
        });  
    }  
      
    function getCanvas() {  
        form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');  
        return html2canvas(form, {  
            imageTimeout: 2000,  
            removeContainer: true
        });  
    }
 });
 
 function gn(){
    return document.getElementById('create_pdf').removeAttribute("hidden")
 }
 function time(){
    return document.getElementById('ct5').removeAttribute("hidden")
 }
 