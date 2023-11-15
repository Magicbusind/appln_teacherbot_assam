frappe.ready(function() {
	// bind events here
	frappe.web_form.on('district_name', (field, value) => {
		frappe.call({
			method: 'appln_teacherbot_assam.mod_teacherbot_assam.web_form.session_tracking_tool.session_tracking_tool.get_block',
			args: {
				'district_name':value
			},
			callback: function(res) {
				if (!res.exc) {
					// code snippet
					console.log(res.message)
					frappe.web_form.fields_dict['block_name'].df.options = res.message
					frappe.web_form.get_field('block_name').refresh()
				}
			}
		});
	});

	frappe.web_form.on('block_name', (field, value) => {
		district_name = frappe.web_form.get_value(["district_name"]);
		frappe.call({
			method: 'appln_teacherbot_assam.mod_teacherbot_assam.web_form.session_tracking_tool.session_tracking_tool.get_school',
			args: {
				'district_name':district_name,
				'block_name':value

			},
			callback: function(res) {
				if (!res.exc) {
					// code snippet
					console.log(res.message)
					frappe.web_form.fields_dict['school_name_and_code'].df.options = res.message
					frappe.web_form.get_field('school_name_and_code').refresh()
				}
			}
		});
	});

	frappe.web_form.on('session_planned_in_month', (field, value) => {
		frappe.call({
			method: 'appln_teacherbot_assam.mod_teacherbot_assam.web_form.session_tracking_tool.session_tracking_tool.validate_planned_session',
			args: {
				'session_in_month':value

			},
			callback: function(res) {
				if (!res.exc) {
					// code snippet
					console.log(res.message)
					if (res.message["flag"] == false){
                        frappe.web_form.fields_dict['session_planned_in_month'].df.description = '<p style="color: Tomato;">No of session planned in a month should not be more than ' + res.message["session_planned_in_month"] + ' </p>'
                        frappe.web_form.get_field('session_planned_in_month').refresh()
                    }
                    else if (res.message["flag"] == true){
                        frappe.web_form.fields_dict['session_planned_in_month'].df.description = ''
                        frappe.web_form.get_field('session_planned_in_month').refresh()
                    }
				}
			}
		});
	});
})
