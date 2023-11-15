// Copyright (c) 2023, Magic Bus and contributors
// For license information, please see license.txt

frappe.ui.form.on("MBTC_Pre Post Assessment Tool", {
	setup(frm) {
        frm.set_query('block_name', () => {
            return {
                filters: {
                    district: cur_frm.doc.district_name
                }
            }
        })

        frm.set_query('school_name_and_code', () => {
            return {
                filters: {
                    district: cur_frm.doc.district_name,
                    block: cur_frm.doc.block_name,
                }
            }
        })  
	},

    onload_post_render(frm){
        if (frm.is_new()){
            cur_frm.doc.start = frappe.datetime.get_datetime_as_string()
        }

    }


});
