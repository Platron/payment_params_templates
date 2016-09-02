$(document).ready(function() {
	var pluginParams = {
		/*
		 * Установка полей и формы в состояние ок. т.е. поля верно введены
		 * @type @exp;settings@arr;ok_setter
		 */
		'ok_setter' : {	
			form : function (data, text, forms, fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('from: status ok');
				data['info_form'].removeClass("field_error").addClass("field_ok");
				fields.message.text('');
				forms.show_form.apply( this , [ID_INFO_FORM]);
			},
			card_num_fields : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_num_fields: status ok');
				fields.card_num_fields.each(function(i) {
					$(this).removeClass("field_error").addClass("field_ok");	
				});
			},
			card_num : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_num: status ok');
				fields.card_num.removeClass("field_error").addClass("field_ok");
			},
			exp_date_fields : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('exp_date_fields: status ok');
				fields.exp_date_fields.each(function(i) {
					$(this).removeClass("field_error").addClass("field_ok");	
				});
			},
			exp_date : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('exp_date: status ok');
				fields.exp_date.removeClass("field_error").addClass("field_ok");	
			},
			name_on_card : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('name_on_card: status ok');
				fields.name_on_card.removeClass("field_error").addClass("field_ok");	
			},
			card_cvc : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('name_on_card: status ok');
				fields.card_cvc.removeClass("field_error").addClass("field_ok");						
			},
			phone : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('phone: status ok');
				fields.phone.removeClass("field_error").addClass("field_ok");	
			},
			email : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('email: status ok');
				fields.email.removeClass("field_error").addClass("field_ok");	
			},
			ps_additional_field : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log($(this).attr('name')+': status ok');
				$(this).removeClass("field_error").addClass("field_ok");	
			}
		},
		/*
		 * Установка полей и формы в состояние error. т.е. поля введены неверно
		 * @type @exp;settings@arr;error_setter
		 */
		'error_setter' :{
			form : function (data, text, forms, fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('from: status error');
				data['info_form'].removeClass("field_ok").addClass("field_error");
				fields.message.text(text);
				forms.show_form.apply( this , [ID_INFO_FORM]);
			},
			card_num_fields : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_num_fields: status error');
				fields.card_num_fields.each(function(i) {
					$(this).removeClass("field_ok").addClass("field_error");	
				});
			},
			card_num : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_num: status error');
				fields.card_num.removeClass("field_ok").addClass("field_error");
			},
			exp_date_fields : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('exp_date_fields: status error');
				fields.exp_date_fields.each(function(i) {
					$(this).removeClass("field_ok").addClass("field_error");	
				});
			},
			exp_date : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('exp_date: status error');
				fields.exp_date.removeClass("field_ok").addClass("field_error");
			},
			name_on_card : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('name_on_card: status error');
				fields.name_on_card.removeClass("field_ok").addClass("field_error");
			},
			card_cvc : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_cvc: status error');
				fields.card_cvc.removeClass("field_ok").addClass("field_error");
			},
			phone : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('phone: status error');
				fields.phone.removeClass("field_ok").addClass("field_error");	
			},
			email : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('email: status error');
				fields.email.removeClass("field_ok").addClass("field_error");	
			},
			ps_additional_field : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log($(this).attr('name')+': status error');
				$(this).removeClass("field_ok").addClass("field_error");	
			}
		},
		
		/*
		 * Установка полей и формы в состояние для ввода значений. поля очищаются от классов
		 * @type @exp;settings@arr;nothing_setter
		 */
		'nothing_setter' : {
			form : function (data, text, forms, fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('from: status nothing');
				data['info_form'].removeClass("field_error").removeClass("field_ok");
				fields.message.text('');
				forms.show_form.apply( this , [ID_INFO_FORM]);
			},
			card_num_fields : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_num_fields: status nothing');
				fields.card_num_fields.each(function(i) {
					$(this).removeClass("field_ok").removeClass("field_error");
				});
			},
			card_num : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_num: status nothing');
				fields.card_num.removeClass("field_ok").removeClass("field_error");
			},
			exp_date_fields : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('exp_date_fields: status nothing');
				fields.exp_date_fields.each(function(i) {
					$(this).removeClass("field_ok").removeClass("field_error");
				});
			},
			exp_date : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('exp_date: status nothing');
				fields.exp_date.removeClass("field_ok").removeClass("field_error");
			},
			name_on_card : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('name_on_card: status nothing');
				fields.name_on_card.removeClass("field_ok").removeClass("field_error");
			},
			card_cvc : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('card_cvc: status nothing');
				fields.card_cvc.removeClass("field_ok").removeClass("field_error");
			},
			phone : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('phone: status nothing');
				fields.phone.removeClass("field_ok").removeClass("field_error");	
			},
			email : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log('email: status nothing');
				fields.email.removeClass("field_ok").removeClass("field_error");	
			},
			ps_additional_field : function (fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				console.log($(this).attr('name')+': status nothing');
				$(this).removeClass("field_error").removeClass("field_ok");	
			}
		}	
	};

	pluginParams.form_type = 'card_form';
	$('div#card_input_form').each( function(){
		$(this).payment_form(pluginParams);
	});
	pluginParams.form_type = 'simple_form';
	$('div#simple_input_form').each( function(){
		$(this).payment_form(pluginParams);
	});
} );