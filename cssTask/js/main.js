var app

(function () {
	var form = {
		form: $('.form-js'),
		input: $('.form-js__input'),
		button: $('.form-js__send-code'),
		resize: function () {
			var formWidth = parseInt(this.form.css('width')),
				buttonWidth = parseInt(this.button.css('width')),
				buttonMargin = parseInt(this.input.css('margin-right')) || parseInt(this.input.css('margin-left'))
			this.input.css('width', formWidth - buttonWidth - buttonMargin + 'px')
		}
	}
	
	$(window).on('resize', function () {
		form.resize()
	})
	
	app  = {
		init: function () {
			form.resize()
		}
	}
})()
app.init()