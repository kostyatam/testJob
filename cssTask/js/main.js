var app

(function () {
	var form = {
		form: $('.form-js'),
		input: $('.form-js__input'),
		button: $('.form-js__send-code'),
		resize: function () {
			var formWidth = ($('html').hasClass('ie7')) ? parseInt(this.form.width()) : parseInt(this.form.outerWidth()),
				buttonWidth = ($('html').hasClass('ie7')) ? parseInt(this.button.width()) : parseInt(this.button.outerWidth()),
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