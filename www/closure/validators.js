$(document).ready(function() {
	var pluginParams = {
		/*
		 * Установка полей и формы в состояние ок. т.е. поля верно введены
		 * @type @exp;settings@arr;ok_setter
		 */
		'validators' : {	
			/**
			 * проверка номера карты
			 * @param {string} cardNumber номер карты
			 * @returns {Boolean}
			 */
			card_num: function( cardNumber, settings) {
				// accept only spaces, digits and dashes
				if (/[^0-9 -]+/.test(cardNumber))		
					return false;

				cardNumber = cardNumber.replace(/\D/g, "");			
				if(cardNumber.length < settings.min_card_number_length || cardNumber.length >  settings.max_card_number_length)
					return false;

				var nCheck = 0, nDigit = 0,	bEven = false;

				for (var n = cardNumber.length - 1; n >= 0 ; n--) {
					var cDigit = cardNumber.charAt(n);
					var nDigit = parseInt(cDigit, 10);
					if (bEven) {
						if ((nDigit *= 2) > 9)
							nDigit -= 9;
					}
					nCheck += nDigit;
					bEven = !bEven;
				}
				return (nCheck % 10) == 0;
			},
			/**
			* проверка даты
			* @param {string} expireDate дата в формате mm/yyyy или mm/yy
			* @returns {Boolean}
			*/
			exp_date: function( expireDate, settings ) {
				var date;
				try {
					date = $.datepicker.parseDate("dd/mm/yy", "01/" + expireDate);
					date = new Date(new Date(date).setMonth(date.getMonth()+1));
				} 
				catch (e) {
					return false;
				}
				return date > (new Date());
			},
			/**
			* проверка имени владельца карты
			* @param {string} nameOnCard имя владельца карты
			* @returns {Boolean}
			*/
			name_on_card: function( nameOnCard, settings ) {
				// accept only spaces, digits and dashes
				if (/[^A-Za-z -]+/.test(nameOnCard))		
					return false;

				nameOnCard = nameOnCard.replace(/[^A-Za-z -]/g, "");			
				if(nameOnCard.length < settings.min_name_on_card_length || nameOnCard.length >  settings.max_name_on_card_length)
					return false;

				return true;	
			},
			/**
			* Проверка номера телефона
			* @param {string} phone
			* @returns {Boolean}
			*/
		   phone : function( phone, settings ) {
			   return (/^[0-9+]+/.test(phone));
		   },

			/**
			 * Проверка email для оповещения
			 * @param {string} email
			 * @returns {Boolean}
			 */
			email : function( email, settings ) {
				if(email.length > settings.max_email_length)
					return false;

				return (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email));
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

