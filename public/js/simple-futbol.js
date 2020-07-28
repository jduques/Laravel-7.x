/*===================================================
 * 
 * Spanish
 * 
 * ===========================================================
 */

var mensaje = {
	"msg_codigo1"		: "Hay un error no especificado en los datos de entrada, por favor elija de nuevo un club.",
	"msg_codigo2"		: "Código correcto!",
	"msg_codigo3"		: "El código ingresado no corresponde al código del club!",
	"msg_codigo4"		: "Este código debe solicitarlo al club seleccionado, como un permiso de preinscripción.",
	"msg_codigo5"		: "Debe elegir primero el club de futbol, si ya lo tiene no lo cambie. Si cambia de club ingrese otro código. El código es sensible a mayúsculas y minúsculas.",
	"nombre" 			: "Ingrese un nombre válido entre 3 y 64 caracteres.",
	"nombre_base"		: "Ingrese un nombre válido entre 3 y 24 caracteres.",
	"director" 			: "Ingrese un nombre válido entre 3 y 64 caracteres.",
	"sede" 			    : "Ingrese un nombre válido entre 3 y 32 caracteres.",
	"ciudad"		    : "Ingrese un nombre válido entre 3 y 32 caracteres.",
	"cedula" 			: "Ingrese una cédula válida entre 5 y 12 números.",
	"telefono" 			: "Ingrese un teléfono válido entre 9 y 12 números.",
	"codigo" 			: "Ingrese un código válido entre 5 y 10 caracteres alfanuméricos.",
	"direccion" 		: "Ingrese una dirección válida entre 3 y 255 caracteres.",
	"fecha_nacimiento"	: "Ingrese una fecha de nacimiento válida.",
	"fecha_inicio_p"	: "Ingrese una fecha válida (dd/mm/aaaa).",
	"fecha_inicio"		: "Ingrese una fecha válida (dd/mm/aaaa).",
	"entrenador_ppal_id": "Seleccione un entrenador.",
	"entrenador_sup_id" : "Seleccione un entrenador.",
	"dorsal"			: "Ingrese un número positivo menor a 1000.",
	"equipo_id"			: "Seleccione un equipo de la lista.",
	"calidad"			: "Ingrese un número entre 1 y 100 (la efectividad es un porcentaje)",
	"posiciones_lista"	: "Seleccione al menos una posición de juego!",
	"posicion"			: "Seleccione al menos una posición de juego.",
	"talla"				: "Ingrese una talla válida.",
	"email"				: "Ingrese un correo válido.",
	"pais"				: "Seleccione al menos un país de origen.",
	"password"			: "La contraseña debe tener al menos 8 caracteres.",
	"password2"			: "Debe tener al menos 8 caracteres de longitud, y contener al menos un número, una al menos una letra mayúscula y una letra minúscula.",
	"email"				: "Ingrese un correo válido.",
	"email2"			: "Debe ser una dirección e-mail válida (user@gmail.com).",
	"categoria"			: "Seleccione una categoría.",
	"club_id"			: "Seleccione un club de futbol",
	"talla_camisa"		: "Ingrese un valor alfanumérico menor a 5 caracteres",
	"talla_pantalon"	: "Ingrese un valor alfanumérico menor a 5 caracteres",
	"talla_zapatos"		: "Ingrese un valor alfanumérico menor a 5 caracteres",
};

var icon = {
	"exclamation_triangle" 	: "<i class='fa fa-exclamation-triangle text-danger pr-2'></i>",
	"circle"				: "<i class='fa fa-info-circle text-light pr-2'></i>",
	"check" 				: "<i class='fa fa-check text-success pr-2'></i>",
};



function validateFormExtra(campos) {
	var i = 0;
	var error = false;

	$.each(campos, function (key, campo) {
	        switch (campo) {
	            case 'calidad': i++;
						// valida los valores del input en la efectividad
						var error_calidad = false;
						$('#divpos input').each(function(i, input) {
							var valor = this.value;
							var valor_id = "#" + this.id;
							if (!this.id.search("calidad")) {
								//alert(valor + "-----> " + /^([1-9]|[[1-9][0-9]]|100)$/.test(valor));
								if( !(/^([1-9]|[1-9][0-9]|100)$/.test(valor)) ) {
									error = true;
									$("#error_calidad").html(icon.exclamation_triangle + mensaje.calidad);
									arr = this.id.split("_");
						      		//$("#DivCalidad_" + parseInt(arr[1])).addClass('was-validated');
						      		//$(valor_id).focus();
								}
								else { if (!error) $("#error_calidad").html(icon.check);  }
							}
						});
	                break;
	        }
	});

	//if (error) $( "#myModal" ).modal('show');
	
	return error;
}

// -----------------------------------------------------------------------------------------

function cantidadPosicionesActuales() {
	c = 0;	
	$('#divpos input').each(function(i, input) {
		if (!this.id.search("calidad")) { c++; }
	});
	return c;
};

$(window).on('resize', function(){
if($( window ).width() < 1188 ) { $('#divinfo').appendTo('#contenedor_info2'); }
else  { $('#divinfo').appendTo('#contenedor_info1'); }
});

function checkboxPos (valor) {
	$( "#posiciones_" + valor ).prop( "checked", true );
}

function eliminarPosSel(value)
{
	$("#posId_" + value).remove();
	$("#posiciones_lista option[value=" + value + "]").prop('disabled',false);
	$("#posiciones_lista").select2();
	if (!$('input[name^="posiciones[0]"]').length) { 
		$('#divpos').hide();
		$("#posiciones_lista option:selected").prop('selected',false);
	}
	$("#posiciones_lista").select2({width:"100%"});
	if ($('input[name="posiciones[0][]"]').length < 1) {
		error = true;
		$("#error_calidad").html(icon.exclamation_triangle + mensaje.posicion);
	}
};

var primer_elemento = 0;
$.fn.goValidate = function() {
    var $form = this,
        $inputs = $form.find('input:text, input:password'),
        $selects = $form.find('select'),
        $textAreas = $form.find('textarea');
    var validators = {
/*    	required: {
    		regex: /.+/,
    	},
*/        password: {
//            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
            regex: /.{8,}/
        },
        email: {
//            regex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
            regex: /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/
        },
        nombre: {
        	regex: /^[A-Za-zÀ-ÿ\u00f1\u00d1 '-.]{3,64}$/,
        	error: 'Error Nombre',
        },
        nombre_base: {
        	regex: /^[A-Za-zÀ-ÿ0-9\u00f1\u00d1 '-.]{3,24}$/,
        },        
        director: {
        	regex: /^[A-Za-zÀ-ÿ\u00f1\u00d1 '-.]{3,64}$/,
        },        
        direccion: {
        	regex: /^[A-Za-z0-9À-ÿ\u00f1\u00d1 '-.]{3,64}$/,
        },
        dorsal: {
        	regex: /^[0-9]\d{0,3}$/,
       },
        equipo_id: {
        	regex: /^[0-9]\d{0,2}$/,
        },
        sede: {
        	regex: /^[A-Za-zÀ-ÿ\u00f1\u00d1 '-.]{3,32}$/,
        },
        ciudad: {
        	regex: /^[A-Za-zÀ-ÿ\u00f1\u00d1 '-.]{3,32}$/,
        },
	    telefono: {
//	        regex: /^[2-9]\d{2}-\d{3}-\d{4,12}$/,
	        regex: /^[0-9]{9,12}$/,
	    },
	    cedula: {
	        regex: /^[0-9]{5,12}$/,
	    },
	    codigo: {
	        regex: /^[A-Za-z0-9]{5,10}$/,
	    },
	    fecha_inicio_p: {
	    	regex: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
	    },
	    fecha_inicio: {
	    	regex: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
	    },
	    fecha_nacimiento: {
	    	regex: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/,
	    },
	    categoria: {
	    	regex: /^[0-5]?[0-9]$/,
	    },
	    club_id: {
	    	regex: /^[A-Za-z0-9=_]{100,200}$/,
	    },
	    pais: {
	 //   	regex: /^([01][0-9][0-9]|2[0-4][0-9]|25[0-5])$/,
	 		regex: /^[A-Z]{2}$/,
	    },
	    posiciones_lista: {
	    	regex: /^[0-2]?[0-9]$/,	
	    },
	    posicion: {
	    	regex: /^[1-9]|[1-9][0-9]|100}$/,	
	    },
	    entrenador_ppal_id: {
	    	regex: /^[0-9]{1,5}$/,
	    },
	    entrenador_sup_id: {
	    	regex: /^[0-9]{1,5}$/,
	    },
	    talla_camisa: {
	    	regex: /^[a-zA-Z0-9\.\-]{1,5}$/,
	    },
	    talla_pantalon: {
	    	regex: /^[a-zA-Z0-9\.\-]{1,5}$/,
	    },
	    talla_zapatos: {
	    	regex: /^[a-zA-Z0-9\.\-]{1,5}$/,
	    },
	//    ^(?!----$).*
    };
    var validate = function(klass, value) {
        var isValid = true,
            error = '';
        if (!value && /required/.test(klass)) {
            error = 'This field is required';
            isValid = false;
        } else {
            klass = klass.split(/\s/);
            $.each(klass, function(i, k){
                if (validators[k]) {
                    if (value && !validators[k].regex.test(value)) {
                        $("#error_" + k).html(icon.exclamation_triangle + mensaje[k])
                        isValid = false;
                        error = validators[k].error;
                    } else $("#error_" + k).html("")
                } 
            });
        }
        return {
            isValid: isValid,
            error: error
        }
    };
    var showError = function($e) {
        var klass = $e.attr('class'),
            value = $e.val(),
            test = validate(klass, value);
        $e.removeClass('invalid');
        $('#form-error').addClass('hide');
        if (!test.isValid) {
        	if (!primer_elemento) $e.focus(); 
        	primer_elemento++;
            $e.addClass('invalid');
            if(typeof $e.data("shown") == "undefined" || $e.data("shown") == false){
            	$("." + $e.attr("name")).popover({
            		title: icon.circle + "Recomendación",
            		content: mensaje[$e.attr("name")],
            		html: true,
            		trigger: "click",
            	});
                $e.popover('show');
            }
        } else { $e.popover('hide'); }
    };
   
	$inputs.on("change focusout keyup", function() {
        showError($(this));
    });

    $inputs.on('shown.bs.popover', function () {
        $(this).data("shown",true);
        var pop = $(this); 
        setTimeout(function () { pop.popover('hide'); }, 3000);
		$("#error_" + pop.attr('name')).html(icon.exclamation_triangle + mensaje[pop.attr('name')]);
    });
    $inputs.on('hidden.bs.popover', function () {
        $(this).data("shown",false);
    });
    $selects.on('shown.bs.popover', function () {
        $(this).data("shown",true);
        var pop = $(this); 
        setTimeout(function () { pop.popover('hide'); }, 3000);
        // utiliza select2, este es solamente para el caso multiple
        // el select debe llevar id igual a name, de lo contrario la clase lleva otro nombre
        // no posible para el caso multiple, el elemento span no esta identificado
		$('#select2-' + pop.attr('id') + '-container').parent('span').addClass('invalid'); 
		$("#error_" + pop.attr('id')).html(icon.exclamation_triangle + mensaje[pop.attr('name')]);
    });    
    $selects.on('hidden.bs.popover', function () {
        $(this).data("shown",false);
    });
    // al seleccionar un elemento del select, se ejecuta change
    $selects.change( function () {
    	// quita la clase invalid del select con error luego de seleccionar una opcion
    	// quita el mensaje rojo de error
		$('#select2-' + $(this).attr('id') + '-container').parent('span').removeClass('invalid'); 
		$("#error_" + $(this).attr('id')).html("");

    });
  
    $form.submit(function(e) {
    	primer_elemento = 0;
        $inputs.each(function() { /* test each input */
            if ($(this).is('.required') || $(this).hasClass('invalid')) {
                showError($(this));
            }
            if ($(this).hasClass('calidad')) {
            	error_calidad = validateFormExtra(["calidad"]);
	    		if (error_calidad) { /* campos adicionales que son cargados durante el llenado del formulario */
	            	e.preventDefault();
	    		}
	    	}
        });
        $selects.each(function() { /* test each input */        	
            if ($(this).is('.required') || $(this).hasClass('invalid')) {
                showError($(this));
            }
        });
        if ($form.find('input.invalid').length) { /* form is not valid */
            e.preventDefault();
            $('#form-error').toggleClass('hide');
        }
        if ($form.find('select.invalid').length) { /* form is not valid */
            e.preventDefault();
            $('#form-error').toggleClass('hide');
        }        
    });
    return this;
};