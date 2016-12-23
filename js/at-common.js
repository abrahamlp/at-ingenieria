/* AT Common JS */

/* Form Submitting & Validation*/
	function submitForm(f){
		form = $(f);
		type = form.attr("id").split("-")[0];
		name = $("#"+type+"-form-name").val();
		tel = $("#"+type+"-form-tel").val();
		mail = $("#"+type+"-form-mail").val();
		info = $("#"+type+"-form-info").val();

		$.ajax({
			url:"scripts/forms.php",
			type: "POST",
			data:{
				type: type,
				name: name,
				tel: tel,
				mail: mail,
				info: info
			},
			beforeSend:function(){
				$(".forms-message").hide();
				$("#"+type+"-form-submit").hide();
				$("#"+type+"-loading").show();
			},
			success:function(data){
				$("#"+type+"-loading").hide();
				console.log(data);
				result = parseInt(data);
				if(result==1){
					$("#"+type+"-success").show();
					$("#"+type+"-success :button").click(function(){
						form.find("input[type=text], textarea").val("");
						$("#"+type+"-success").hide();
						$("#"+type+"-form-submit").show();
					});
				}
				else{
					$("#"+type+"-error").show();
					$("#"+type+"-error :button").click(function(){
						submitForm(f);
					});
				}
				
			}
		});
	}

/* Validate declarations */

	jQuery.validator.addMethod(
		"phone", 
		function(value, element){
			return this.optional(element) || /^\+?\d{0,3}?[- .]?\(?(?:\d{1,4})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/.test(value);
		},
		"No parece ser un número telefónico"
	);

	$("#sells-form").validate({
		rules:{
			"sells-form-name":"required",
			"sells-form-mail":{
				required:true,
				email:true
			},
			"sells-form-tel":{
				required: false,
				phone: true
			},
			"sells-form-info":"required"
		},
		messages:{
			"sells-form-name":{
				"required":"Necesitamos su nombre"
			},
			"sells-form-mail":{
				"required":"Necesitamos su correo electrónico",
				"email":"No parece ser una dirección válida"
			},
			"sells-form-info":{
				"required":"Escriba un mensaje por favor"
			}
		},
		errorClass:"form-error",
		errorElement:"span",
		highlight:function(element){
			$(element).addClass("invalid-input");
		},
		unhighlight:function(element){
			$(element).removeClass("invalid-input");
		},
		errorPlacement:function(error,element){
			$(error).insertAfter($(element).next());
		},
		submitHandler:function(form){
			submitForm(form);
		}
	});

	$("#contact-form").validate({
		rules:{
			"contact-form-name":"required",
			"contact-form-mail":{
				required:true,
				email:true
			},
			"contact-form-tel":{
				required: false,
				phone: true
			},
			"contact-form-info":"required"
		},
		messages:{
			"contact-form-name":{
				"required":"Necesitamos su nombre"
			},
			"contact-form-mail":{
				"required":"Necesitamos su correo electrónico",
				"email":"No parece ser una dirección válida"
			},
			"contact-form-info":{
				"required":"Escriba un mensaje por favor"
			}
		},
		errorClass:"contact-form-error",
		errorElement:"span",
		highlight:function(element){
			$(element).addClass("invalid-input");
		},
		unhighlight:function(element){
			$(element).removeClass("invalid-input");
		},
		errorPlacement:function(error,element){
			$(error).insertAfter($(element).next());
		},
		submitHandler:function(form){
			submitForm(form);
		}
	});

	/* End of validate declarations */

/* Slideshows declarations */
	$("#slippry-1").slippry({
		pager: false,
		transition: 'horizontal'
	});

	$("#slippry-2").slippry({
		pager: false,
		transition: 'horizontal'
	});
/* Enf of slideshows declarations */


// Spinner.js

	$("#sells-loading").spin({
		position: "relative",
		color: "#DEC329"
	});

	$("#contact-loading").spin({
		position: "relative",
		color: "#DEC329"
	});

