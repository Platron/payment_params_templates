$(document).ready(function() {
	var pluginParams = {
		/*
		 * Установка полей и формы в состояние ок. т.е. поля верно введены
		 * @type @exp;settings@arr;ok_setter
		 */
		'handlers' : {	
			card_num_fields: function(fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				this.value = this.value.replace(/[^0-9]/g, "");

				var cardNum = '';
				fields.card_num_fields.each(function(i) {
					cardNum += $(this).val();	
				});

				if(cardNum.length >= settings.min_card_number_length && cardNum.length <= settings.max_card_number_length)
					if(validators.card_num( cardNum , settings)) ok_setter.card_num_fields.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);	
					else error_setter.card_num_fields.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);					
				else nothing_setter.card_num_fields.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
			},
			// обработчик одного поля ввода номера карты
			card_num: function(e, fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				var value = this.value.replace(/[^0-9]/g, "");

				var panBlocks = value.substr(0, 12).match(/.{1,4}/g) || [];
				var formattedPan = panBlocks.join(' ');
				if (value.length > 12) {
				  formattedPan += ' ' + value.substr(12); 
				}
				this.value = formattedPan;		

				if(value.length >= (settings.min_card_number_length + 3) && value.length <= (settings.max_card_number_length + 3))
					if(validators.card_num( value , settings)) ok_setter.card_num.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);	
					else error_setter.card_num.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
				else if(value.length > (settings.max_card_number_length + 3)){
					error_setter.card_num.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
				}
				else
					nothing_setter.card_num.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
			},
			phone: function(e, fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				var BACKSPACE_CODE = 8;
				var value = this.value = this.value.replace(/[^0-9+()]/g, "");

				// Вставка скобки и страны
				if(this.value === "" && e.keyCode !== BACKSPACE_CODE)
					this.value = "+"+settings.default_code_country+"(";

				// Закрытие скобкой кода
				// default_code_country_lenght и default_code_country можно передать при инициализации плагина
				if(this.value[this.value.length - settings.default_code_country_lenght - 1] === "(" && e.keyCode !== BACKSPACE_CODE)
					this.value = this.value+")";


				if(value.length >= settings.min_phone_length && value.length <= settings.max_phone_length)
					if(validators.phone( value, settings )) ok_setter.phone.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);	
					else error_setter.phone.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
				else nothing_setter.phone.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
			},
			email: function(e, fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				var value = this.value;

				if(!value.length) nothing_setter.email.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
				else if(validators.email( value, settings )) ok_setter.email.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);	
				else error_setter.email.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
			},
			ps_additional_field: function(e, fields, validators, settings, ok_setter, error_setter, nothing_setter) {
				var pattern = this.pattern;
				var value = this.value;

				if(!value.length) nothing_setter.ps_additional_field.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
				else if(validators.ps_additional_field( value, settings, pattern )) ok_setter.ps_additional_field.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
				else error_setter.ps_additional_field.apply(this, [fields, validators, settings, ok_setter, error_setter, nothing_setter]);
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

