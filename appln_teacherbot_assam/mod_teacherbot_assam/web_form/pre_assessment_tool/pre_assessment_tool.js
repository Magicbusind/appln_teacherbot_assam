frappe.ready(function() {
        // bind events here
        frappe.web_form.on('district_name', (field, value) => {
                frappe.call({
                        method: 'appln_teacherbot_assam.mod_teacherbot_assam.web_form.pre_assessment_tool.pre_assessment_tool.get_block',
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
                        method: 'appln_teacherbot_assam.mod_teacherbot_assam.web_form.pre_assessment_tool.pre_assessment_tool.get_school',
                        args: {
                                'district_name':district_name,
                                'block_name':value

                        },
                        callback: function(res) {
                                if (!res.exc) {
                                        // code snippet
                                        console.log(res.message)
                                        frappe.web_form.fields_dict['school_name'].df.options = res.message
                                        frappe.web_form.get_field('school_name').refresh()
                                }
                        }
                });
        });

})
