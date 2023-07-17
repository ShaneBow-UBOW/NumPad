/**
* NumPad
* http://www.shanebow.com
* ~~forms/num-pad/NumPad.js
*
* Widgit for entering digits via click/touch
*
* Copyright 2023, ShaneBow, All Rights Reserved
* http://www.shanebow.com
*
* 20230710 rts created
***********************************************************/

;( function( module ){
	const MARKUP = `
		<table class="numpad">
		 <tr><th colspan="3">0</th></tr>
		 <tr><td>7</td><td>8</td><td>9</td></tr>
		 <tr><td>4</td><td>5</td><td>6</td></tr>
		 <tr><td>1</td><td>2</td><td>3</td></tr>
		 <tr><td colspan="2">0</td><td class="enter">&#8629;</td></tr>
		</table>`;

	$(`<style>
		.numpad td {
			border:  2px solid #333;
			text-align:  center;
			height: 60px;
			width: 60px;
			vertical-align:  middle;
			font-family:  "Comic Sans MS", cursive, sans-serif;
			font-size: 50px;
			cursor: pointer;
			}
		.numpad th {
			text-align: center;
			border:2px solid blue;
			color:blue;
			font-size:18px;
			}
		table.numpad  {border-collapse: collapse}
		</style>`).appendTo($('head'));

	class NumPad {
		static defaults = {
			onSubmit: (val) => UBOW.flashError(`NumPad.onSubmit NOT set!`),
			};

		constructor(el, options) {
			const my = this;
my.$el = $(el);
			my.opts = $.extend({}, NumPad.defaults, options);
			my.$pad = $(MARKUP).appendTo($(el));
			my.$val = my.$pad.find('th');
			my.reset();

			my.$pad.on('click', 'td', function(e) {
				let $tr = $(this);
				if (my.val && $tr.hasClass('enter'))
					return my.opts.onSubmit(my.val);
				let digit = parseInt($(this).text());
				my.val *= 10;
				my.val += digit;
				my.set(my.val);
				});
			}

		set(val) {
			const my = this;
			my.val = val;
			my.$val.text(my.val);
			}

		reset() {
			this.set(0);
			}
		}

	module.NumPad = NumPad;
	})( UBOW );
