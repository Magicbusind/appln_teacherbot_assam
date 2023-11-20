frappe.ready(function() {
	// bind events here
	        frappe.web_form.on('district', (field, value) => {
                frappe.call({
                        method: 'appln_teacherbot_assam.mod_teacherbot_assam.web_form.assam_school_details.assam_school_details.get_block',
                        args: {
                                'district':value
                        },
                        callback: function(res) {
                                if (!res.exc) {
                                        // code snippet
                                        console.log(res.message)
                                        frappe.web_form.fields_dict['block'].df.options = res.message
                                        frappe.web_form.get_field('block').refresh()
                                }
                        }
                });
        });


})
