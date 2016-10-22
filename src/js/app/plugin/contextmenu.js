/**
 * Created by liusuling on 2016/10/22.
 */

define(function () {
	var Contextmenu ={};

	Contextmenu.init = function () {
		Contextmenu.shortcutEvent();

	};

	Contextmenu.shortcutEvent = function() {
		var that = this;
		$(document).on('contextmenu',function(ev) {
			$target = $(ev.target);
			var pos = {
				left: ev.pageX,
				top: ev.pageY
			};
			if($target.closest('.edit-workspace .edit_area .comp_paragraph').length) {
				that.showShortcut(pos);
			}
			ev.preventDefault()
		})

		$(document).on('click',function () {
			if($('#contextmenuPhone').length) {
				$('#contextmenuPhone').hide();
			}
		});

		$(document).on('click','#contextmenuPhone a', function (ev) {
			$('#contextmenuPhone').hide();
			ev.preventDefault()
		});
	};

	Contextmenu.showShortcut = function(pos) {
		//创建右键元素
		if(!$('#contextmenuPhone').length) {
			$('#scene').append(GTPL.contextmenu());
		}
		$('#contextmenuPhone').css({
			left: pos.left,
			top: pos.top
		}).show();
	};





	return Contextmenu;
});