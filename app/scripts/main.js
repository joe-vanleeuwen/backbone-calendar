var Calendar = {};

Calendar.Day = Backbone.Model.extend({
	initialize: function() {
		// console.log('Hello. I\'m ', this.get('name'));
	}
})

Calendar.DayView = Backbone.View.extend({

	className: 'day-wrapper',

	events: {
		'click .edit': 'edit',
		'keydown .change-text': 'changeText'
	},

	initialize: function() {
		// console.log('I\'m born!');
		var tmpl = $('.calendar-template').text()
		var dayTemplate = _.template(tmpl);


		$(this.el).html(dayTemplate({day: {info: this.model.get('text')}}))
		var row = '.row.' + this.model.get('row');

		$(row).append(this.el)
	},

	edit: function() {
		console.log(this.el)
		// console.log($(this.model.set('row')).text('DUDE'))
		// $(this.el).append('<input value="'+this.model.get('text')+'">')
		// $(this.el).html(dayTemplate({day: {info: this.model.get('text')}}) + '<input value="'+this.model.get('text')+'">')
	// 	var crazy = new Calendar.EditView({
	// 		model: this.model,
	// 		elEl: this.el
	// 	})
		$(this.el).find('.day').append('<input class="change-text" value="'+this.model.get('text')+'">')
		// $(this.el).append('<input class="change-text" value="'+this.model.get('text')+'">')
	},

	changeText: function(evet) {
		if (event.which === 13) {
			this.model.set('text', $('.change-text').val())
			console.log(this.model.get('text'))
			$(this.el).find('.info-box').text(this.model.get('text'));
			$(this.el).find('input').remove();
		}
	}
		
})

function generateTrainingProgram(weeks) {
	$('.container').html('');
	if (weeks < 21) {	
		for (i = 0; i < weeks; i++) {
			$('.container').append('<div class="row ' + i.toString() + '"></div>');
			console.log('appended row')
			for (z = 0; z < 7; z++) {
				console.log('made new day')
				var day = new Calendar.Day({
					row: i,
					text: "Happy Trails"
				});
				var dayView = new Calendar.DayView({model: day})
			}
		};
	} else {$('.container').text('Ain\'t nobody got time for that!')}
}

$('.number-of-weeks').keydown(function(event) {
	if (event.which === 13) {
		generateTrainingProgram(parseInt($(this).val()))
	}
})








